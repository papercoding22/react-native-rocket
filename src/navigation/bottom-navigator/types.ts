export interface Tab {
  name: string;
  component: (props: any) => React.JSX.Element;
  icon: string;
}

export interface BottomNavigatorProps {
  tabs: Tab[];
}
