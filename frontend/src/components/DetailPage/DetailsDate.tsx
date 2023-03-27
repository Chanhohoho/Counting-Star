import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {update, DetailsData} from '../../store/DetailsSlice';
import UpBtn from '../../assets/UpBtn.png';
import DownBtn from '../../assets/DownBtn.png';

const DateContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

function DetailsDate() {

    const dispatch = useDispatch();
    const day = useSelector((state:{DetailsSlice:DetailsData}) => state.DetailsSlice.day);
    
    const [today, setToday] = useState<Date>(new Date());
    const [newDate, setNewDate] = useState<Date>(today);	// 어제
    const [year, setYear] = useState<number>(newDate.getFullYear());
    const [month, setMonth] = useState<number>(newDate.getMonth() +1);
    const [date, setDate] = useState<number>(newDate.getDate());

    const [styled, setStyled] = useState<object>({
        height : '25px',
        width : '25px',
    });

    const dateUp = () => {
        if(day === 10) return;
        dispatch(update(day+1));
        setNewDate(new Date(newDate.setDate(newDate.getDate() + 1)));
        setYear(newDate.getFullYear());
        setMonth(newDate.getMonth() +1);
        setDate(newDate.getDate());
    }

    const dateDown = () => {
        if(day === 0) return;
        dispatch(update(day-1));
        setNewDate(new Date(newDate.setDate(newDate.getDate() - 1)));
        setYear(newDate.getFullYear());
        setMonth(newDate.getMonth() +1);
        setDate(newDate.getDate());
    }

    return (
        <DateContainer>
            <img style={styled} src={DownBtn} alt="down" onClick={dateDown}/>
            <div> {year}년 <br/>   {month}월 <br/> {date}일</div>
            <img style={styled} src={UpBtn} alt="up" onClick={dateUp}/>
        </DateContainer>
    );
}

export default DetailsDate;