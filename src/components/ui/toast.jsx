import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * @typedef {React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> & {
 *   variant?: "default" | "destructive";
 * }} ToastProps
 */

/**
 * @typedef {React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>} ToastActionProps
 */

/**
 * @typedef {React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>} ToastCloseProps
 */

/**
 * @typedef {React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>} ToastTitleProps
 */

/**
 * @typedef {React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>} ToastDescriptionProps
 */

const ToastProvider = ToastPrimitive.Provider;

const ToastViewport = React.forwardRef(
  /**
   * @param {React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>} props
   * @param {React.ForwardedRef<React.ElementRef<typeof ToastPrimitive.Viewport>>} ref
   */
  ({ className, ...props }, ref) => (
    <ToastPrimitive.Viewport
      ref={ref}
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      {...props}
    />
  )
);

ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef(
  /**
   * @param {ToastProps} props
   * @param {React.ForwardedRef<React.ElementRef<typeof ToastPrimitive.Root>>} ref
   */
  ({ className, variant, ...props }, ref) => (
    <ToastPrimitive.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
);

Toast.displayName = ToastPrimitive.Root.displayName;

const ToastAction = React.forwardRef(
  /**
   * @param {ToastActionProps} props
   * @param {React.ForwardedRef<React.ElementRef<typeof ToastPrimitive.Action>>} ref
   */
  ({ className, ...props }, ref) => (
    <ToastPrimitive.Action
      ref={ref}
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      )}
      {...props}
    />
  )
);

ToastAction.displayName = ToastPrimitive.Action.displayName;

const ToastClose = React.forwardRef(
  /**
   * @param {ToastCloseProps} props
   * @param {React.ForwardedRef<React.ElementRef<typeof ToastPrimitive.Close>>} ref
   */
  ({ className, ...props }, ref) => (
    <ToastPrimitive.Close
      ref={ref}
      className={cn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      )}
      {...props}
    >
      <X className="h-4 w-4" />
    </ToastPrimitive.Close>
  )
);

ToastClose.displayName = ToastPrimitive.Close.displayName;

const ToastTitle = React.forwardRef(
  /**
   * @param {ToastTitleProps} props
   * @param {React.ForwardedRef<React.ElementRef<typeof ToastPrimitive.Title>>} ref
   */
  ({ className, ...props }, ref) => (
    <ToastPrimitive.Title
      ref={ref}
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  )
);

ToastTitle.displayName = ToastPrimitive.Title.displayName;

const ToastDescription = React.forwardRef(
  /**
   * @param {ToastDescriptionProps} props
   * @param {React.ForwardedRef<React.ElementRef<typeof ToastPrimitive.Description>>} ref
   */
  ({ className, ...props }, ref) => (
    <ToastPrimitive.Description
      ref={ref}
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  )
);

ToastDescription.displayName = ToastPrimitive.Description.displayName;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
