import Link from "next/link";

export default function Footer() {

  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="footer__top--wrapper">
            <div className="footer__block">
              <div className="footer__link--title">Actions</div>
              <div>
                <div className="footer__link--wrapper">
                  <Link href="#" className="footer__link">Summarist Magazine</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Cancel Subscription</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Help</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Contact us</Link>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Useful Links</div>
              <div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Pricing</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Summarist Business</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Gift Cards</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Authors & Publishers</Link>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Company</div>
              <div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">About</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Careers</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Partners</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Code of Conduct</Link>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Other</div>
              <div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Sitemap</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Legal Notice</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Terms of Service</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Privacy Policies</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright--wrapper">
            <div className="footer__copyright">
              Copyright &copy; 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
