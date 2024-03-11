import React from "react";
import {Button as MUIButton} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { withTooltip } from "./hoc";



const BaseButton = React.forwardRef<HTMLButtonElement, any>(
  (props, ref) => {
    const {
      children,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      typographyProps,
      isLoading,
      ...rest
    } = DefaultProps(props);

    return (
      <MUIButton
        ref={ref}
        {...rest}
        disabled={isLoading || rest.disabled}
        data-state={
          rest.disabled ? "disabled" : isLoading ? "disabled " : "active"
        }
        variant={rest.variant}
        size={rest.size}
        color={rest.color}
        disableElevation={rest.disableElevation}
        disableFocusRipple={rest.disableFocusRipple}
        disableRipple={rest.disableRipple}
        fullWidth={rest.fullWidth}
        onClick={rest.onClick}
      >
        {LeftIcon && <LeftIcon />}
        {typographyProps ? (
          <Typography {...typographyProps}>{children}</Typography>
        ) : (
          children
        )}
        {RightIcon && <RightIcon />}
        {isLoading && <CircularProgress size={20} />}
      </MUIButton>
    );
  }
);

BaseButton.displayName = "Button";

const DefaultProps = (props: any) => {
  const defaultProps: any = {
    ...props,
    color: props.color || "accent",
    size: props.size || "medium",
    variant: props.variant || "contained",
    disableElevation: props.disableElevation || false,
    disableFocusRipple: props.disableFocusRipple || false,
    disableRipple: props.disableRipple || false,
    fullWidth: props.fullWidth || false,
    onClick: props.onClick || (() => {}),
  };

  return defaultProps;
};

export const Button = withTooltip(BaseButton);
