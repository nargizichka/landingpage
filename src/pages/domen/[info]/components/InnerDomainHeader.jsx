import { useRouter } from "next/router";
import DomainHeader from "../../components/DomainHeader";

const InnerDomainHeader = (params) => {
  // const { info } = params;
  const router = useRouter();
  const { info } = router.query;

  console.log(info);

  const title = () => (
    <span className="text-center">
      <span className="text-custom-pink">{info && info.toUpperCase()}</span> domenlarini ro'yxatdan
      o'tkazish
    </span>
  );
  console.log(params);

  return <DomainHeader title={title()} />;
};

export default InnerDomainHeader;
