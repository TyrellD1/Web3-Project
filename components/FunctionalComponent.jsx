export default function FunctionalComponent() {
    return (
        <>
            <div className="">
                <p>Functional Component Test</p>
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