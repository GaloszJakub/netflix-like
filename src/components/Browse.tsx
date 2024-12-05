import { ProfileCard } from './Library'
import Cookies from 'js-cookie'

export default function BrowseComponent() {
	const handleClick = (profileNumber: number) => {
		Cookies.set('profile', profileNumber.toString())
		alert(`wybrałeś ${profileNumber}`)
	}
	return (
		<div className="bg-[#141414] w-screen h-screen text-[#808080] bg-gradient-to-b from-black from-5%   to-#[#141414]">
			<div className="flex flex-col justify-center items-center h-full  ">
				<div className="text-5xl text-white  pb-16">
					<h2>Who's watching?</h2>
				</div>
				<div className="flex flex-row space-x-8">
					<ProfileCard background="profile1.png" name="Profil1" onClick={() => handleClick(1)}></ProfileCard>
					<ProfileCard background="profile2.png" name="Profil2" onClick={() => handleClick(2)}></ProfileCard>
					<ProfileCard background="profile3.png" name="Profil3" onClick={() => handleClick(3)}></ProfileCard>
					<ProfileCard background="profile4.png" name="Profil4" onClick={() => handleClick(4)}></ProfileCard>
					<ProfileCard background="profile5.png" name="Profil5" onClick={() => handleClick(5)}></ProfileCard>
				</div>
				<div>
					<a href="">
						<div className="border-[#808080] border-2 py-2 px-4 hover:text-white hover:border-white duration-200 mt-12 ">
							<p>Manage Profiles</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
