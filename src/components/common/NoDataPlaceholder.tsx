const NoDataPlaceholder = ({
  text = "No data('s) to display",
}: {
  text?: string;
}) => {
  return (
    <div className=" w-full flex items-center justify-center py-4">
      <h5 className="text-foreground text-xl opacity-70">{text}</h5>
    </div>
  );
};

export default NoDataPlaceholder;
