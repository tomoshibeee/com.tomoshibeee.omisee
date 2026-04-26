export default function Footer({ site }: any) {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-6 border-t bg-white text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()}  {site.name}. All rights reserved.</p>
    </footer>
  );
}
