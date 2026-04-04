import styles from "./Skeleton.module.scss";
import {clsx} from "clsx";

interface SkeletonProps {
    width?: string;
    height?: string;
    circle?: boolean;
    radius?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Skeleton = (props: SkeletonProps) => {
    return (
        <div
            style={{height: props.height, width: props.width}}
            className={clsx(
                styles.Skeleton,
                props.circle && styles[`--is-circle`],
                props.radius && styles[`--radius-${props.radius}`]
            )}
        />
    );
}

export default Skeleton;
