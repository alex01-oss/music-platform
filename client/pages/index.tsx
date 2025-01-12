import Navbar from "@/components/Navbar";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Welcome!</h1>
          <h3>The best tracks are collected here.</h3>
        </div>
      </MainLayout>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}
