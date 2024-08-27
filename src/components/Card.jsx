export const Card = ({ icon, title, text }) => (
  <div className="hover:bg-slate-500 cursor-pointer">
    <div>
      <img src={icon} alt="icon" />
    </div>
    <h1 className="font-medium text-[16px] leading-[26px]">{title}</h1>
    <p className="font-normal text-[12px] leading-[18px] max-w-[255px]">
      {text}
    </p>
  </div>
);
