import Image from 'next/image'

export default function FunctionalComponent() {
    return (
        <>
            <div className="main-text">
                <p id="first-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae imperdiet eros. Donec gravida aliquam lacus in blandit. Integer sodales non nunc et pretium. Vivamus sed eros auctor, scelerisque erat eu, consectetur tellus. Fusce blandit diam nulla, vel pretium turpis lacinia quis. Etiam vel sapien dolor. Integer scelerisque a mauris quis sodales. Etiam volutpat vehicula turpis, nec sollicitudin sem finibus vitae. Etiam sagittis dui et quam consequat, et egestas neque lacinia. Fusce vel leo id ante condimentum ultrices. Ut sollicitudin varius imperdiet. Donec bibendum pulvinar tincidunt. Vestibulum volutpat risus ac urna ornare faucibus. Aliquam imperdiet est viverra convallis ullamcorper.</p>

                <p>Vivamus at neque a felis finibus vestibulum in ac nibh. Nullam commodo dictum nisl, et dignissim justo maximus in. Phasellus bibendum lorem eu pulvinar vulputate. Phasellus sit amet congue nisl. Suspendisse quis vestibulum nisl. Aenean vel leo nec orci molestie sollicitudin. Sed ultrices justo eget odio viverra blandit. Cras malesuada eros quis augue faucibus vehicula. Nunc pulvinar ligula ipsum, at lacinia metus malesuada eu. Morbi faucibus eros eget erat congue, vitae dictum ante fermentum. Curabitur dictum ex vitae dolor vulputate commodo.</p>

                <p id ="second-section">Suspendisse suscipit orci sed convallis dictum. Praesent malesuada rhoncus sagittis. Donec fermentum ligula massa, sed feugiat arcu cursus eget. Pellentesque velit justo, dictum nec dapibus sit amet, volutpat sit amet justo. Nullam lacinia, erat eu gravida pharetra, libero augue efficitur quam, congue efficitur tortor ante id lorem. Donec velit sapien, feugiat rhoncus ex in, consequat laoreet ipsum. Phasellus orci dui, tincidunt sit amet feugiat quis, aliquet ac tellus. Ut justo augue, tristique mollis eros faucibus, luctus iaculis nisl. Vestibulum accumsan odio vel blandit auctor. Integer ut lectus maximus, maximus urna vel, mollis magna.</p>

                <p>Duis finibus lorem enim, at pulvinar nibh interdum ac. Sed et ligula laoreet, rhoncus est a, gravida mi. Etiam et lacus vel diam ultrices efficitur. Nullam molestie turpis ac ante eleifend vehicula. Phasellus tincidunt malesuada felis. Sed tempus nec ipsum sed pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent ultricies nulla ac velit condimentum, nec suscipit lectus gravida. Praesent sit amet consectetur sapien. Nullam dictum elit ac quam rhoncus varius. Integer imperdiet ullamcorper fermentum. Aliquam in lacus libero. Sed malesuada cursus viverra.</p>

                <p>Pellentesque maximus ex a risus tempus, in ornare odio luctus. Quisque aliquam velit nec tempus pellentesque. Vestibulum nec volutpat magna. Sed vestibulum lorem ut nibh cursus egestas. Duis nisi magna, sodales in mollis nec, elementum ut ipsum. Cras vitae condimentum quam, ac consequat nunc. Quisque blandit enim scelerisque ligula maximus consequat. Suspendisse sit amet sapien condimentum, feugiat sem nec, vulputate enim.</p>
            </div>


            <style jsx>{`
                @import 'styles/global-vars';
                @import 'styles/media-queries';
                // All Devices Styles Start

                // All Devices Styles End
                @include media-query-phone {

                }
                @include media-query-desktop {
                    .main-text{
                        background-color: grey;
                    }
                }
            `}</style>
        </>
    )
}