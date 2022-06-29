export default function IconClose({
    size,
    onClick,
}) {
    return (
        <>
            <div onClick={onClick} className='icon-close'>
                <svg id="mobile-nav-close-svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="_02_User" data-name="02 User"><path d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z"></path><path d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z"></path></g></svg>
            </div>
            <style jsx>{`
                @import 'styles/global-vars';
                @import 'styles/media-queries';
                // All Devices Styles Start
                    .icon-close {
                        width: ${size};
                        height: ${size};
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