export default function CallToActionDivider(props) {
    return (
        <>
            <div className="call-to-action">
                <p>{props.title}</p>
                <button>{props.btnText}</button>

            </div>
            <style jsx>{`
                @import 'styles/global-vars';
                @import 'styles/media-queries';
                // All Devices Styles Start

                .call-to-action {
                        background: #4A5CFF;

                        padding: 1.5rem 4rem;

                        display: flex;
                        flex-flow: column nowrap;
                        justify-content: center;
                        align-items: center;

                        min-width: 100%;
                    }

                    p {
                        color: white;
                        font-weight: 600;
                        font-size: 1.5rem;
                        text-align: center;
                        margin: 0;
                        margin-bottom: 1rem;
                    }

                    button {
                        color: white;
                        border: 2px solid white;
                        font-size: 1.2rem;

                        padding: .8rem 2rem;
                        background: #4A5CFF;
                    }

                // All Devices Styles End
                @include media-query-phone {

                    
                }
                @include media-query-desktop {

                    .call-to-action {
                        padding: 2rem;
                    }

                    p {
                        width: 35%;
                        margin: 1.5rem;
                    }
                }
            `}</style>
        </>
    )
}