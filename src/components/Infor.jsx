export const Infor = ({ img, title, text, button }) => (
  <div className="flex w-full flex-col md:flex-row  md:gap-y-0 gap-y-10 items-center justify-between ">
    <div className="w-11/12 md:w-[540px] h-auto order-2 md:order-1">
      <img src={img} alt="icon" width={"100%"} height={"auto"} />
    </div>
    <div className="flex flex-col w-11/12 md:max-w-[445px] order-1 md:order-2">
      <h1 className="font-medium text-[36px] leading-9 text-[#091133]">
        {title}
      </h1>
      <br />
      <p className="font-normal text-[16px] leading-6 text-[#505F98] max-w-[445px]">
        {text}
      </p>
      {button && (
        <button className="text-white bg-[#111b47] hover:bg-blue-600 font-medium text-[12px] py-1 px-3 w-40 h-[26px] rounded mt-5">
          {button}
        </button>
      )}
    </div>
  </div>
);
