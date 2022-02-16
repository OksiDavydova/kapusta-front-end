import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Media from "react-media";
import { ArrowButton } from "../components/Buttons";
import { MonthPicker } from "../components/MonthPicker";

import { BalanceOval } from "../components/Balance/BalanceOval";
import { Chart, ChartMobile } from "../components/Chart";

import { CategoryReportList } from "../components/CategoryReportList";
import { ReportBalance } from "../components/ReportBalance";
import {
  ReportPageWrapper,
  ReportPageTopWrapper,
  ChartTabletWrapper,
} from "../components/Wrapper/Wrapper.styled";
import {  diagramLoading, getDataDiagram, diagramNotifyStatus } from "../redux/setDataDiagram/dataDiagram-selector";
import { LoaderReport } from "../components/Loader";

export default function ReportPage() {
  const notify = useSelector(diagramNotifyStatus);
  const isLoading = useSelector(diagramLoading);
  const getDataChart = useSelector(getDataDiagram);
  const dataCheck = getDataChart ? getDataChart.length ===0 : false;
  console.log(dataCheck)

  
  console.log(notify);

  useEffect(() => {
    const { status, message } = notify;
    switch (status) {
      case "error":
        toast.error(message);
        break;

      case "success":
        toast.success(message);
        break;

      default:
        return;
    }
  }, [notify]);

  return (
    <>
      {isLoading && <LoaderReport />}
      <ReportPageWrapper>
        <Media query="(max-width: 767px)" render={() => <ArrowButton />} />
        <Media query="(max-width: 767px)" render={() => <MonthPicker />} />
        <Media query="(max-width: 767px)" render={() => <BalanceOval />} />

        <Media
          query="(min-width: 768px)"
          render={() => (
            <ReportPageTopWrapper>
              <ArrowButton />
              <BalanceOval />
              <MonthPicker />
            </ReportPageTopWrapper>
          )}
        />
        <ReportBalance />

        <CategoryReportList />
        {!dataCheck && 
          <>
            <Media query="(max-width: 767px)" render={() => <ChartMobile />} />

            <Media
              query="(min-width: 768px)"
              render={() => (
                <ChartTabletWrapper>
                  <Chart />
                </ChartTabletWrapper>
              )}
            />
          </>
        }
        
      </ReportPageWrapper>
    </>
  );
}
