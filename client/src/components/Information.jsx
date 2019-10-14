import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { InformationListContainer } from "./styled-components/InformationListStyles";

export default class Home extends Component {
  render() {
    return (
      <InformationListContainer>
        <Container
          className="text-center "
          style={{
            border: "1px black solid",
            marginTop: "130px",
            borderRadius: "15px"
          }}
        >
          <h3 className="main-page-title" style={{ marginTop: "16px" }}>
            Auto Insurance
          </h3>
          <p className="description">
            Vehicle insurance (also known as car insurance, motor insurance or
            auto insurance) is insurance for cars, trucks, motorcycles, and
            other road vehicles. Its primary use is to provide financial
            protection against physical damage or bodily injury resulting from
            traffic collisions and against liability that could also arise from
            incidents in a vehicle. Vehicle insurance may additionally offer
            financial protection against theft of the vehicle, and against
            damage to the vehicle sustained from events other than traffic
            collisions, such as keying, weather or natural disasters, and damage
            sustained by colliding with stationary objects. The specific terms
            of vehicle insurance vary with legal regulations in each region.
          </p>
          <p>
            Widespread use of the motor car began after the First World War in
            urban areas. Cars were relatively fast and dangerous by that stage,
            yet there was still no compulsory form of car insurance anywhere in
            the world. This meant that injured victims would seldom get any
            compensation in an accident, and drivers often faced considerable
            costs for damage to their car and property.
            <p>
              A compulsory car insurance scheme was first introduced in the
              United Kingdom with the Road Traffic Act 1930. This ensured that
              all vehicle owners and drivers had to be insured for their
              liability for injury or death to third parties whilst their
              vehicle was being used on a public road.[1] Germany enacted
              similar legislation in 1939 called the "Act on the Implementation
              of Compulsory Insurance for Motor Vehicle Owners."[2]
            </p>
            In many jurisdictions, it is compulsory to have vehicle insurance
            before using or keeping a motor vehicle on public roads. Most
            jurisdictions relate insurance to both the car and the driver;
            however, the degree of each varies greatly. Several jurisdictions
            have experimented with a "pay-as-you-drive" insurance plan which
            utilizes either a tracking device in the vehicle or vehicle
            diagnostics. This would address issues of uninsured motorists by
            providing additional options and also charge based on the miles
            (kilometers) driven, which could theoretically increase the
            efficiency of the insurance, through streamlined collection.[3]
          </p>
        </Container>

        <Container
          className="text-center"
          style={{
            border: "1px black solid",
            marginTop: "36px",
            borderRadius: "15px"
          }}
        >
          <h3 className="main-page-title" style={{ marginTop: "16px" }}>
            Commercial general liability insurance
          </h3>

          <p className="description">
            Commercial general liability insurance is a broad type of insurance
            policy which provides liability insurance for general business
            risks. Commercial General Liability (CGL) is the specific name for a
            policy of this type in the United States insurance market. It is the
            "first line" of coverage that a business typically purchases,[1] and
            covers many of the common risks that can happen to any type of
            business, such as bodily injury or property damage on the business
            premises or due to the business operations, personal and advertising
            injury, and medical payments.[2] It specifically excludes certain
            types of risks, including professional services, pollution, liquor,
            and directors and officers liability,[2] and separate insurance
            policies are available to cover these situations.
          </p>
          <p>
            Whether or not general liability insurance covers construction
            defects or "faulty workmanship" is a matter of some debate, as some
            insurers have viewed poor workmanship as a risk that is covered by a
            surety bond rather than an insurance policy given that a
            construction professional may have some influence (through attention
            to detail, skill, and effort) over whether such a defect
            occurs.[3][4] Though in certain jurisdictions manufacturers of
            component parts continue to have coverage under a Commercial General
            Liability policy if their component part harms a finished product,
            in this case homeowners pursuing damages to a home caused by
            defective windows.[5]
          </p>
        </Container>

        <Container
          className="text-center"
          style={{
            border: "1px black solid",
            marginTop: "36px",
            borderRadius: "15px"
          }}
        >
          <h3 className="main-page-title" style={{ marginTop: "16px" }}>
            Life Insurance
          </h3>

          <p className="description">
            Life insurance (or life assurance, especially in the Commonwealth of
            Nations) is a contract between an insurance policy holder and an
            insurer or assurer, where the insurer promises to pay a designated
            beneficiary a sum of money (the benefit) in exchange for a premium,
            upon the death of an insured person (often the policy holder).
            Depending on the contract, other events such as terminal illness or
            critical illness can also trigger payment. The policy holder
            typically pays a premium, either regularly or as one lump sum. Other
            expenses, such as funeral expenses, can also be included in the
            benefits.
          </p>
          <p>
            Life policies are legal contracts and the terms of the contract
            describe the limitations of the insured events. Specific exclusions
            are often written into the contract to limit the liability of the
            insurer; common examples are claims relating to suicide, fraud, war,
            riot, and civil commotion.
          </p>
          <p>
            Modern life insurance bears some similarity to the asset management
            industry[1] and life insurers have diversified their products into
            retirement products such as annuities.[2]
          </p>
          <p>
            Parties to contract The person responsible for making payments for a
            policy is the policy owner, while the insured is the person whose
            death will trigger payment of the death benefit. The owner and
            insured may or may not be the same person. For example, if Joe buys
            a policy on his own life, he is both the owner and the insured. But
            if Jane, his wife, buys a policy on Joe's life, she is the owner and
            he is the insured. The policy owner is the guarantor and he will be
            the person to pay for the policy. The insured is a participant in
            the contract, but not necessarily a party to it.
          </p>
          <p>
            The beneficiary receives policy proceeds upon the insured person's
            death. The owner designates the beneficiary, but the beneficiary is
            not a party to the policy. The owner can change the beneficiary
            unless the policy has an irrevocable beneficiary designation. If a
            policy has an irrevocable beneficiary, any beneficiary changes,
            policy assignments, or cash value borrowing would require the
            agreement of the original beneficiary.
          </p>
          <p>
            In cases where the policy owner is not the insured (also referred to
            as the celui qui vit or CQV), insurance companies have sought to
            limit policy purchases to those with an insurable interest in the
            CQV. For life insurance policies, close family members and business
            partners will usually be found to have an insurable interest. The
            insurable interest requirement usually demonstrates that the
            purchaser will actually suffer some kind of loss if the CQV dies.
            Such a requirement prevents people from benefiting from the purchase
            of purely speculative policies on people they expect to die. With no
            insurable interest requirement, the risk that a purchaser would
            murder the CQV for insurance proceeds would be great. In at least
            one case, an insurance company which sold a policy to a purchaser
            with no insurable interest (who later murdered the CQV for the
            proceeds), was found liable in court for contributing to the
            wrongful death of the victim (Liberty National Life v. Weldon, 267
            Ala.171 (1957)).
          </p>
        </Container>
      </InformationListContainer>
    );
  }
}
