import React from "react";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import TodayBox from "../../components/MainPage/TodayBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TodayFucProps, TodaySpot } from "../../types/mainType";

function TodayMain({ toggleMainVisibility }: TodayFucProps) {
  const [spotList, setSpotList] = useState<Array<TodaySpot>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    let now = new Date();
    let year = now.getFullYear().toString();
    let month = (now.getMonth() + 1).toString().padStart(2, "0");
    let day = now.getDate().toString().padStart(2, "0");

    let hours = now.getHours().toString();

    axios
      .get("https://counting-star.com/api/spot/ranking", {
        params: {
          baseDateYear: year,
          baseDateMonth: month,
          baseDateDay: day,
          // baseDateHour: hours,
          baseDateHour: "00",
          baseDateMinute: "00",
          limit: 5,
        },
      })
      .then(function (response) {
        setSpotList(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //검색 후 결과 컴포넌트 클릭하면 해당 상세페이지로 연결
  const navigateToDetail = (spotId: number) => {
    navigate(`/detail/${spotId}`);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-7">
        <div className="col-span-2 ">
          <Logo />
        </div>
        <div className="col-span-8 ">
          <p className="text-4xl text-center py-4 font-serif">
            오늘은 어디에 별이 많이 뜰까요?
          </p>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="grid grid-cols-12 gap-10 mx-auto my-1 ">
        {spotList &&
          spotList.map((spot, idx) => (
            <div
              className="col-span-4"
              key={idx}
              onClick={() => {
                navigateToDetail(spot.spotId);
              }}
            >
              <TodayBox spotName={spot.spotName} grade={spot.grade} />
            </div>
          ))}
      </div>
    </>
  );
}

export default TodayMain;
