export default function Home() {
  return (
    <div className="flex-center h-screen flex-col space-y-5">
      <h1 className="h1">StoreIt - The only storage solution you will need.</h1>
      <p className="flex gap-5">
        <a href="sign-in">Sign In</a>
        <a href="sign-up">Sign Up</a>
      </p>
    </div>
  );
}
