import {useEffect, useRef, useState} from "react"

export default function Card() {
    const myRef = useRef(null)
    const [visible, setVisible] = useState(false)
    useEffect(()=>{
        const observer = new IntersectionObserver((entries, observer) => {
            
            const entry = entries[0];
            setVisible(entry.isIntersecting)
            console.log('entry', entry);
            console.log('entry.isIntersecting', entry.isIntersecting);
        });
        observer.observe(myRef.current);
    }, [])
    return (
        <>
            <div ref={myRef} className='card'>
                {visible?
                <>
                    <div className="image"></div>
                    <div className='btn-div'>
                        <button>Mint</button>
                    </div>
                </>
                :null}
            </div>
            <style jsx>{`
                @import 'styles/global-vars';
                @import 'styles/media-queries';
                // All Devices Styles Start
                    
                // All Devices Styles End
                @include media-query-phone {
                    .card {
                        min-width: 40px;
                        margin: 1.5rem 1rem;

                        .image {
                            background: red;
                            width: 100%;
                            height: 300px;
                        }
                        .btn-div {
                            width: 100%;
                            height: 100px;
                            background: blue;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            button {
                                font-size: 1rem;
                            }
                        }
                    }
                }
                @include media-query-desktop {
                    
                }
            `}</style>
        </>
    )
}