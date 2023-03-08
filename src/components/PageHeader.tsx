const PageHeader = ({ name }: any) => {
  return (
    <div className="relative">
      <h1 className="text-5xl lg:text-[85px] text-[#e6e8ec] font-bold">
        {name}
      </h1>
      <h2 className="absolute text-3xl lg:text-5xl top-3 lg:top-5 left-0.5 font-bold">
        {name}
      </h2>
    </div>
  );
};

export default PageHeader;
