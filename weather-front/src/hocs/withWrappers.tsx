import { ComponentType, JSX } from "react";

export const withWrappers = (...wrappers: ((props: any) => JSX.Element)[]) => {
  return (WrappedComponent: ComponentType<any>) => {
    return (props: any) => {
      return wrappers.reduceRight((acc, prov) => {
        const Provider = prov;
        return <Provider>{acc}</Provider>;
      }, <WrappedComponent {...props} />);
    };
  };
};
