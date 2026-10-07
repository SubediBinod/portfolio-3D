import { useEffect } from "react";

const GOOGLE_PRIVACY_URL = "https://policies.google.com/privacy";
const GOOGLE_ADS_URL = "https://policies.google.com/technologies/ads";
const GOOGLE_CONSENT_URL = "https://www.google.com/about/company/user-consent-policy/";

const OrderUpPrivacy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute("href");

    document.title = "Privacy Policy for Order Up! - Sequence Memory";
    description?.setAttribute(
      "content",
      "Privacy Policy for Order Up! - Sequence Memory"
    );
    canonical?.setAttribute("href", "https://binodsubedi15.com.np/order-up/privacy");

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) {
        description.setAttribute("content", previousDescription);
      }
      if (canonical && previousCanonical) {
        canonical.setAttribute("href", previousCanonical);
      }
    };
  }, []);

  return (
    <main className="privacy-shell">
      <header className="privacy-header">
        <a className="privacy-back-link" href="https://binodsubedi15.com.np/">
          <span aria-hidden="true">&#8592;</span> Back to portfolio
        </a>
        <p className="privacy-kicker">Order Up! - Sequence Memory</p>
        <h1>Privacy Policy</h1>
        <p className="privacy-intro">
          This policy explains how information is handled when you play Order Up! -
          Sequence Memory on Android.
        </p>
        <div className="privacy-meta" aria-label="Policy details">
          <span><strong>Developer:</strong> Binod Subedi</span>
          <span><strong>Platform:</strong> Android</span>
          <span><strong>Last updated:</strong> October 7, 2026</span>
        </div>
      </header>

      <article className="privacy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Binod Subedi (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Android game Order Up! -
            Sequence Memory (the &quot;App&quot;). The App is a casual memory and brain-training
            game. We respect your privacy and have prepared this policy to explain what
            information the App and its advertising partners may handle.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            The App does not require an account or login. We do not intentionally collect
            your name, email address, phone number, physical address, contacts, photos,
            messages, or other directly identifying personal information.
          </p>
          <p>
            The App uses Google AdMob to show ads. Google and its advertising partners
            may collect or receive information such as device identifiers, advertising
            identifiers, IP address, approximate location, app interactions, diagnostics,
            and other information as described in Google&apos;s policies and controlled by
            your device, account, and consent settings.
          </p>
        </section>

        <section>
          <h2>3. Information Stored Locally on Your Device</h2>
          <p>
            The App may store gameplay and progression information locally on your device,
            including coins, XP, lives, streaks, achievements, settings, and game progress.
            This information is used to provide the game experience and is not an account
            record maintained by us. Removing the App or clearing its app data may delete
            this locally stored information, subject to your device&apos;s behavior.
          </p>
        </section>

        <section>
          <h2>4. Advertising and Google AdMob</h2>
          <p>
            The App uses Google AdMob for rewarded ads and interstitial ads. Depending on
            Google&apos;s configuration, applicable consent requirements, and your choices,
            ads may be personalized or non-personalized.
          </p>
          <p>
            Google may process information for ad delivery, measurement, fraud prevention,
            and related advertising purposes. See Google&apos;s{" "}
            <a href={GOOGLE_PRIVACY_URL} target="_blank" rel="noreferrer">Privacy Policy</a>,{" "}
            <a href={GOOGLE_ADS_URL} target="_blank" rel="noreferrer">Advertising</a>, and{" "}
            <a href={GOOGLE_CONSENT_URL} target="_blank" rel="noreferrer">EU user consent information</a>
            {" "}for more information.
          </p>
        </section>

        <section>
          <h2>5. How Information Is Used</h2>
          <p>Information handled in connection with the App may be used to:</p>
          <ul>
            <li>save and restore gameplay and progression on your device;</li>
            <li>operate, maintain, and improve the App;</li>
            <li>display, measure, and protect advertising; and</li>
            <li>diagnose crashes, bugs, performance issues, and misuse.</li>
          </ul>
        </section>

        <section>
          <h2>6. Third-Party Services</h2>
          <p>
            The App uses Google AdMob for advertising and may use other third-party services
            necessary for App functionality. These providers may process information
            under their own privacy policies and terms. We encourage you to review the
            policies of any third-party service used by the App.
          </p>
        </section>

        <section>
          <h2>7. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may make information available to
            service providers such as Google AdMob when necessary to provide advertising,
            analytics related to advertising, security, or App functionality. We may also
            disclose information when required by law or when reasonably necessary to
            protect rights, safety, and the integrity of the App.
          </p>
        </section>

        <section>
          <h2>8. Data Retention and Deletion</h2>
          <p>
            Gameplay data stored locally remains on your device until it is removed by the
            App, you clear the App&apos;s data, or you uninstall the App. We do not maintain a
            user account or a central profile for you. Information processed by Google or
            other third parties is retained and deleted according to their policies and
            settings. You can review Google&apos;s available privacy controls through its{" "}
            <a href={GOOGLE_PRIVACY_URL} target="_blank" rel="noreferrer">privacy resources</a>.
          </p>
        </section>

        <section>
          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Order Up! - Sequence Memory is not designed specifically for children. We do
            not intentionally collect personal information from children. If you believe a
            child has provided personal information through a third-party service connected
            with the App, please contact us so we can consider appropriate action.
          </p>
        </section>

        <section>
          <h2>10. Security</h2>
          <p>
            We take reasonable steps to protect information within our control. No method
            of storage or transmission is completely secure, and third-party services have
            their own security practices and responsibilities.
          </p>
        </section>

        <section>
          <h2>11. Your Choices</h2>
          <p>
            You can manage Android advertising settings, reset or limit your advertising
            identifier where supported, and respond to consent choices shown by Google or
            its consent tools. You can also decline optional rewarded ads, and clear local
            game data or uninstall the App to remove locally stored progression.
          </p>
        </section>

        <section>
          <h2>12. Changes to This Privacy Policy</h2>
          <p>
            We may update this policy when the App, its services, or applicable legal
            requirements change. The revised version will be posted on this page with a new
            &quot;Last updated&quot; date. Your continued use of the App after an update means the
            updated policy applies to your use of the App.
          </p>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>
            For questions about this Privacy Policy or the App, contact:
          </p>
          <address className="privacy-contact">
            <strong>Developer:</strong> Binod Subedi<br />
            <strong>App:</strong> Order Up! - Sequence Memory<br />
            <strong>Contact:</strong>{" "}
            <a href="mailto:imbinodsubedi@gmail.com">imbinodsubedi@gmail.com</a>
          </address>
        </section>
      </article>

      <footer className="privacy-footer">
        <a href="https://binodsubedi15.com.np/">Binod Subedi</a><span aria-hidden="true">&middot;</span> Order Up! - Sequence Memory
      </footer>
    </main>
  );
};

export default OrderUpPrivacy;