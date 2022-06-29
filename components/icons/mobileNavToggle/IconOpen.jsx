export default function IconOpen({
    size,
    onClick,
    additionalStyles
}) {
    return (
        <>
            <div onClick={onClick} className='icon-open'>
                <svg id="mobile-nav-open-svg" viewBox="0 -53 384 384" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path></svg>
            </div>
            <style jsx>{`
                @import 'styles/global-vars';
                @import 'styles/media-queries';
                // All Devices Styles Start
                    .icon-open {
                        width: ${size};
                        height: ${size};
                        ${additionalStyles}
                    }
                // All Devices Styles End
                @include media-query-phone {
                    
                }
                @include media-query-desktop {
                    
                }
            `}</style>
        </>
    )
}