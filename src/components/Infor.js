export const Infor = ({img, title, text ,button}) => (
    
    <div className="flex w-full flex-col md:flex-row min-h-screen items-center justify-around md:space-y-0 space-y-5 md:space-x-10">
      <div className="flex " >
        <img src={img} alt="icon"
        />
      </div>
     <div className="flex flex-col">
      <h1 className="font-medium text-[36px] leading-9 text-[#091133]">{title}</h1>
      <br/>
      <p className="font-normal text-[16px] leading-6 text-[#505F98] max-w-[445px]">{text}</p>
      {button && (
        <button className="text-white bg-[#111b47] font-medium text-[12px] py-1 px-3 w-40 h-[26px] rounded mt-5">
          {button}
        </button>
      )}
      </div>
    </div>
    
)