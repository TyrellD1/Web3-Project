import FunctionalComponent from "../components/FunctionalComponent.jsx";
import NavBar from "../components/NavBar.jsx";
import TeamMember from "../components/TeamMember.jsx";

export default function Home() {
  return (
    <div className="main-container">  
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="body-container">
        <FunctionalComponent />

        <h1 id="fourth-section">Team</h1>

        <div className="team-images">
          <TeamMember imgSrc="/../public/stock.png" name="Tyrell" title='Lead Developer'/>
          <TeamMember imgSrc="/../public/stock.png" name="Andrew" title='Developer'/>
        </div>
      </div>
      
  
      <style jsx>{`
        @import 'styles/global-vars';
        @import 'styles/media-queries';
        // All Devices Styles Start

        // All Devices Styles End
        @include media-query-phone {
          h1{
            padding-left: 20px;
          }
          .nav-container{
            position: relative;
            z-index: 2;
          }
          .body-container {
            padding-top: 65px; // Accounts for nav-container height
          }
          .team-images{
            z-index: 1;
          }
        }

        @include media-query-desktop {
          h1{
            padding-left: 20px;
          }
          .team-images{
            display: flex;
            flex-direction: row;
            
            
            .image-label{
                flex-direction: column;
            }
          }

          }
       
      `}</style>
    </div>
  )
}
