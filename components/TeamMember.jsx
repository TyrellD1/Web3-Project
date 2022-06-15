import Image from 'next/image'

export default function TeamMember({imgSrc,name, title}) {
    return (
        <>  <div className='background-space'>

        
                <div className="team-images">
                
                    <Image src={imgSrc} alt="Person 1" width="238px" height="233px" />
                        <div className='image-label'>
                            {name}
                        
                            <div className='title-label'>
                                {title}
                            </div>
                        </div>
                </div>
            </div>

            
            <style jsx>{`
                @import 'styles/global-vars';
                @import 'styles/media-queries';
                // All Devices Styles Start
                    .background-space{
                        background-color: white;
                    }
                // All Devices Styles End
                @include media-query-phone {
                    .team-images{
	                    display: flex;
                        flex-direction: column;
                        background-color: #e8eafc;
                        margin: 28px;
                        padding: 10px;
                        
                        .image-label{
                            padding-top:15px;
                            padding-bottom:10px;

                            .title-label{
                                color: #7381ff;
                            }
                        }
                    }
                }
                @include media-query-desktop {
                    .team-images{
                        background-color: #e8eafc;
                        padding: 10px;
                        margin: 28px;
                        
                        
                        .image-label{
                            flex-direction: column;

                            .title-label{
                                color: #7381ff;
                            }
                        }
                    }
                }
            `}</style>
        </>
    )
}