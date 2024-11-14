import BlogItem from "./BlogItem";

const blogPosts = [
  {
    title: "Prestashop: Frais de livraison des livres - Loi Darcos",
    date: "Oct 23",
    iconSrc: "/images/icon.png", 
  },
  {
    title: "Corriger l'erreur \"Warning: end(): Argument #1 ($array) must be passed by reference, value given\" sous Prestashop",
    date: "Aug 23",
    iconSrc: "/images/icon.png", 
  },
  {
    title: "Migration du module \"Options, Frais et Réductions, Frais de port\" vers Options et Frais Avancé",
    date: "Apr 22",
    iconSrc: "/images/icon.png", 
  },
  {
    title: "Vulnérabilité dans le module \"Loi Cookies RGPD (Avis + Bloqueur)\" Prestashop",
    date: "Nov 22",
    iconSrc: "/images/icon.png", 
  },
  {
    title: "Comment appliquer des frais de gestion ?",
    date: "Oct 22",
    iconSrc: "/images/icon.png", 
  },
  {
    title: "Prestashop : Livraison gratuite",
    date: "Nov 22",
    iconSrc: "/images/icon.png", 
  },
  {
    title: "Prestashop : Frais de port par pays",
    date: "Nov 20",
    iconSrc: "/images/icon.png", 
  },
  {
    title: "Prestashop : Frais de port par code postal",
    date: "Nov 20",
    iconSrc: "/images/icon.png", 
  },
  {
    title: "Proposer une assurance à vos clients sur PrestaShop en 5 minutes!",
    date: "Jun 17",
    iconSrc: "/images/icon.png", 
  },
];

export default function Blogs() {
  return (
    <div className="p-6 mr-52 ml-36">
      {blogPosts.map((post, index) => (
        <BlogItem
          key={index}
          title={post.title}
          date={post.date}
          iconSrc={post.iconSrc}
        />
      ))}
    </div>
  );
}
