import logo from "../assets/logo.png";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className=" w-full flex flex-col gap-5 py-5 justify-center items-center">
      <div>
        <img className="w-[80px]" src={logo} />
      </div>
      <div className="flex justify-center items-center gap-3">
        <Button variant="link">Terms</Button>
        <Button variant="link">Privacy</Button>
        <Button variant="link">Contact</Button>
      </div>
      <div className="flex justify-center items-center gap-2">
        <a href="#" className="text-primary">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
          >
            <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026M17 6.5h.5"></path>
            <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></path>
          </svg>
        </a>
        <a href="#" className="text-primary">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
          >
            <path d="M9.77 8.515c2.23-1.812 5.444-.845 5.823 2.135.403 3.163-.4 5.67-3.52 5.67-2.895 0-2.806-2.52-2.806-2.52 0-2.7 4.589-3.06 7.262-1.71 4.9 3.15 1.336 8.91-4.01 8.91C8.09 21 4.5 18.75 4.5 12s3.59-9 8.02-9c3.125 0 5.944 1.626 6.98 4.879"></path>
          </svg>
        </a>
      </div>
      <div className="text-primary">© 2025 Cody, Inc.</div>
    </footer>
  );
}

export default Footer;
