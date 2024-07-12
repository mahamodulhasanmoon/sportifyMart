
const Heading = ({ title, subtitle }:{
    title: string;
    subtitle: string;
  
}) => {
  return (
    <div className="text-center my-10 max-w-[768px] mx-auto">
      <h1 className="text-4xl font-bold text-primaryColor mb-5">{title}</h1>
      <p className="text-lg text-textColor-paragraph">{subtitle}</p>
    </div>
  );
};

export default Heading;
