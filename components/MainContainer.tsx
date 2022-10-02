interface MainContainerProps {
  children: React.ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  return <main className="mx-6 my-4 w-full">{children}</main>;
}
