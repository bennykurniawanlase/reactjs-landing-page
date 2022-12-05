import NavbarComponent from "./components/NavbarComponent";
import FaqComponent from "./components/FaqComponent";
import FooterComponent from "./components/FooterComponent";
import GalleryComponent from "./components/GalleryComponent";
import HeroComponent from "./components/HeroComponent";
import ServiceComponent from "./components/ServiceComponent";

function App() {
	return (
		<div>
			<HeroComponent />
			{/* Main Content  */}
			<NavbarComponent />
			<GalleryComponent />
			<ServiceComponent />
			<FaqComponent />
			{/* Main Content  */}
			<FooterComponent />
		</div>
	);
}

export default App;
