import Animate from "@/src/components/Animate";
import Image from "next/image";
import Link from "next/link";

const TermsAndConditions = () => {
  return(
    <main className="py-7 lg:pb-20">
      <section className="pt-8 text-primary">
      <h1 as="h1" className="text-center text-[32px] mb-5 lg:mb-8 lg:text-[40px] ff-2">Terms and condition</h1>
        <div className="mx-auto px-5 max-w-[1014px]">
            <div className="admin-content-area">
              <p>In advance for a full refund. Cancellations made after 24 hours of the session will not be refunded but can be rescheduled for another session(if it is a group session). </p>
              <p>Satisfaction Guarantee: If a client is unsatisfied with their first session, they are eligible for a 50% refund or a free rescheduled session. Subsequent sessions are not eligible for refunds after completion.</p>
              <p>Package Refunds: For multi-session packages, clients can receive a prorated refund for unused sessions if they decide to discontinue, as long as the request is made within 15 days of purchase.</p>
              <p>All the refunds will take a process of seven working days</p>
            </div>
        </div>
      </section>
    </main>
  )
};

export default TermsAndConditions;
