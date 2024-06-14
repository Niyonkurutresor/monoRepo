import { toDataURL } from "qrcode";
export default async function Home() {
  const image = await toDataURL("https:shaka.rw");
  const user = {
    name: "Rwanamiza Christian",
    position: "Product Manager",
    companyName: "Incore Envestment company Ltd.",
    phone: "+250786265766",
    companyLocation: "Nk 432 Kimihurura, Kigali City",
    companyWebsite: "https://www.shaka.rw",
    socialMedias: [
      { name: "LinkedIn", url: "https://linkedin.com/" },
      { name: "Twitter", url: "https://twitter.com/johndoe" },
      { name: "Facebook", url: "https://facebook.com/johndoe" },
      { name: "Instagram", url: "https://instagram.com/johndoe" },
      { name: "GitHub", url: "https://github.com/johndoe" },
      { name: "Dribbble", url: "https://dribbble.com/johndoe" },
    ],
  };
  return (
    <div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">{user.name}</h2>
        <p className="text-center text-gray-600">{user.position}</p>
        <div className="mt-6">
          <p>
            <strong>Company:</strong> {user.companyName}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Location:</strong> {user.companyLocation}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={user.companyWebsite}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.companyWebsite}
            </a>
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Social Media</h3>
          <ul className="space-y-2">
            {user.socialMedias.map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-fit px-2 my-3 mx-auto">
            <img src={image} alt="qrcode" />
          </div>
        </div>
      </div>
    </div>
  );
}
