export default function Cards(props) {
    return (
        <>
            <div className=''>
                <div className="card">
                    <img alt="tribute picture " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"/>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
            <style jsx>{`
                @import 'styles/global-vars';
                @import 'styles/media-queries';
                // All Devices Styles Start
                    
                // All Devices Styles End
                @include media-query-phone {
                    
                }
                @include media-query-desktop {
                    
                }
            `}</style>
        </>
    )
}