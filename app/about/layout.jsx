import Footer from "@/components/Footer";

export const metadata = {
  title: "Kuria | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
