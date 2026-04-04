<?php

$argv = $_SERVER['argv'];
$command = $argv[1] ?? null;

if (!$command) {
    echo <<<TEXT

\033[36mUsage:\033[0m
  utils command [options] [arguments]

\033[36mAvailable Commands:\033[0m
  \033[32mmake:component\033[0m    Create a new React component
                    \033[33mOptions: -ui    Place it inside components/ui/\033[0m
  \033[32mmake:page\033[0m         Create a new React page
  \033[32mmake:context\033[0m      Create a new React context

TEXT;
    exit(0);
}

switch ($command) {
    case 'make:component':
        makeComponent($argv);
        break;

    case 'make:page':
        makePage($argv);
        break;

    case 'make:context':
        makeContext($argv);
        break;

    default:
        echo "Unknown command {$command}\n";
        exit(1);
}

// ---------------- Functions ----------------

function makeComponent(array $argv): void
{
    $name = $argv[2] ?? null;
    $isUi = in_array('-ui', $argv);

    if (!$name) {
        echo "Component name is required.\n";
        exit(1);
    }

    $name = ucfirst($name);
    $basePath = __DIR__ . '/client/src/components/' . ($isUi ? 'ui/' : '') . $name;

    if (!is_dir($basePath)) {
        mkdir($basePath, 0755, true);
        echo "Created folder: $basePath\n";
    }

    $tsxPath = "$basePath/{$name}.tsx";
    if (!file_exists($tsxPath)) {
        file_put_contents($tsxPath, getTsxTemplate($name));
        echo "Created: $tsxPath\n";
    }

    $scssPath = "$basePath/{$name}.module.scss";
    if (!file_exists($scssPath)) {
        file_put_contents($scssPath, '');
        echo "Created: $scssPath\n";
    }

    exit(0);
}

function makePage(array $argv): void
{
    $name = $argv[2] ?? null;

    if (!$name) {
        echo "Page name is required.\n";
        exit(1);
    }

    $name = ucfirst($name);
    $basePath = __DIR__ . '/client/src/pages/' . $name;

    if (!is_dir($basePath)) {
        mkdir($basePath, 0755, true);
        echo "Created folder: $basePath\n";
    }

    $tsxPath = "$basePath/{$name}.tsx";
    if (!file_exists($tsxPath)) {
        file_put_contents($tsxPath, getPageTemplate($name));
        echo "Created: $tsxPath\n";
    }

    exit(0);
}

function makeContext(array $argv): void
{
    $name = $argv[2] ?? null;

    if (!$name) {
        echo "Context name is required.\n";
        exit(1);
    }

    $pascalName = ucfirst($name);
    if (strtolower(substr($pascalName, -7)) !== 'context') {
        $pascalName .= 'Context';
    }

    $fileName = strtolower(preg_replace('/(?<!^)[A-Z]/', '-$0', $pascalName));
    $basePath = __DIR__ . '/client/src/context';

    if (!is_dir($basePath)) {
        mkdir($basePath, 0755, true);
        echo "Created folder: $basePath\n";
    }

    $filePath = "$basePath/{$fileName}.tsx";

    if (file_exists($filePath)) {
        echo "Context already exists: $filePath\n";
        exit(1);
    }

    file_put_contents($filePath, getContextTemplate($pascalName));
    echo "Created: $filePath\n";

    exit(0);
}

// ---------------- Templates ----------------

function getTsxTemplate(string $name): string
{
    return <<<TSX
import styles from "./{$name}.module.scss";

interface {$name}Props {

}

const {$name} = (props: {$name}Props) => {
    return (
        <div></div>
    );
}

export default {$name};
TSX;
}

function getPageTemplate(string $name): string
{
    return <<<TSX
const {$name} = () => {
    return (
        <div></div>
    );
}

export default {$name};
TSX;
}

function getContextTemplate(string $contextName): string
{
    $baseName = preg_replace('/context$/', '', $contextName);

    return <<<TSX
import React, { createContext, useContext } from "react";

interface {$contextName}Props {}

/**
 * Context to provide {$baseName} information throughout the app
 */
export const {$contextName} = createContext<{$contextName}Props | undefined>(undefined);

/**
 * Custom hook to access the {$contextName}
 */
export function use{$contextName}() {
    const context = useContext({$contextName});

    if (!context) {
        throw new Error("use{$contextName} must be used within a {$contextName}Provider");
    }

    return context;
}

/**
 * {$contextName}Provider component to wrap around parts of the app that need this context
 */
export function {$contextName}Provider({ children }: { children: React.ReactNode }) {
    const values = {};

    return (
        <{$contextName}.Provider value={values}>
            {children}
        </{$contextName}.Provider>
    );
}
TSX;
}
