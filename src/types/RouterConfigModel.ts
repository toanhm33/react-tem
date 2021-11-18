export type TConfigRouter = {
  path?: string;
  exact?: boolean;
  component: React.ComponentType;
  layout: React.ComponentType;
  role?: any;
};
