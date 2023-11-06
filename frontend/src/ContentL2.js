
const ContentL2 = ({ content , getDetails }) => {

    return (
        <div className='ContentL2 flex flex-wrap min-w-[200px] h-[100%] sm:w-[200px] md:min-w-[250px] bg-[#F5F9F9]  rounded-[2px] p-3 mr-[20px]' onClick={() => {
            getDetails(content.CourseCode);
        }}>
            <div className='CourseTitle text-[#344148c1] text-left w-[76%] text-l font-medium font-"Roboto Flex"  ' >
                {content.CourseTitle}
            </div>
            <div className='CourseCode text-[#798389] h-1 font-medium font-"Roboto Flex"'>
                {content.CourseCode}
            </div>
            <div className='CourseDescription w-[100%] h-[50%] overflow-auto text-[#505C62] font-light text-sm align-top'>
                {content.CourseDesc}
            </div>
            <div className='CourseCredits self-end w-[100%] text-right'>
                {content.CourseCredits} Credits
            </div> 
        </div>
    )
}

export default ContentL2