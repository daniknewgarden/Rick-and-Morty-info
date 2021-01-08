import React, { useState, useEffect } from "react";
//Airbnb date picker
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { Moment } from "moment";
//Styled components
import styled, { css } from "styled-components";
//Icons
import calendarIcon from "./icons/icon-calendar.svg";
import arrowRight from "./icons/arrow-right.svg";
import arrowLeft from "./icons/arrow-left.svg";

//Types
type PickerProps = {
  onChange?: (startDate: string, endDate: string) => void;
};
type focusInputType = "startDate" | "endDate" | null;
type dateType = { startDate: Moment | null; endDate: Moment | null };

//Styles
// Picker inputs(wrapper, inputs, calendar icon)
const inputsStyles = css`
  //Inputs wrapper
  .DateRangePickerInput {
    display: flex;
    align-items: center;
    padding: 4px;

    border-radius: 4px;

    //Arrow between inputs
    &_arrow {
      display: inline-grid;
      .inputs_arrow {
        margin: 0 8px;
        display: inline-grid;

        img {
          width: 8px;
          height: 8px;
        }
      }
    }

    &_calendarIcon {
      margin: 0;
      margin-left: 12px;
      padding: 8px;
      background: #28293d;
      border-radius: 4px;
      width: 32px;
      height: 32px;
    }
  }
  //Input
  .DateInput {
    width: auto;
    border-radius: 4px;
    &_input {
      color: #000;
      padding: 2px 4px 2px 4px;
      max-width: 98px;
      height: 28px;
      border: none;
      border-radius: 4px;
      text-align: center;

      font-size: 16px;
      display: inline-grid;
      place-items: center;

      &:focus {
        background: #ebebf0;
        color: #555770;
      }
    }
  }
`;

const datePickerLine = css`
  .DateInput_fang {
    display: none;
  }

  .arrow-next::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    transform: rotate(-45deg);
    border-width: 8px;
    border-style: solid;
    border-color: #fff #fff transparent transparent;
    position: absolute;
    top: -31px;
    right: 8px;
    border-radius: 0px 4px 0px 0px;
  }
`;

const dateNavigationStyles = css`
  .DayPickerNavigation {
    position: absolute;
    top: 23px;
    right: 16px;
    display: inline-grid;
    grid-template: auto / 24px 16px;

    .arrow-prev::after {
      content: "";
      display: inline-block;
      height: 16px;
      width: 1px;
      margin: 0 3px;
      background: #c7c8d9;
    }
  }
`;

const dateTitleStyles = css`
  .CalendarMonth_caption {
    font-size: 20px;
    padding-top: 18px;
    text-align: left;
    color: #000;
  }
`;

const dateDayTitleStyles = css`
  .DayPicker_weekHeader {
    top: 60px;
  }

  .DayPicker_weekHeader_ul {
    text-transform: uppercase;
  }

  .DayPicker_weekHeader_li {
    font-size: 10px;
    color: #1e1e1f;
  }
`;

const dateDayStyles = css`
  .CalendarDay__default {
    font-size: 10px;
    border: none;
    border-radius: var(--size-radius);
  }
  .CalendarDay__selected_span {
    background: linear-gradient(
      180deg,
      rgba(9, 14, 124, 0) 0%,
      rgba(9, 38, 105, 0) 10%,
      rgba(51, 102, 255, 0.16) 10%,
      rgba(51, 102, 255, 0.16) 90%,
      rgba(133, 8, 8, 0) 90%,
      rgba(8, 30, 134, 0) 100%
    );
    color: #28293d; //text
    border: none;

    border-radius: 0px;
  }

  .CalendarDay__selected {
    background: #3366ff;
    color: white;
    border: none;
  }

  // Will edit when hovered over. _span style also has this property
  .CalendarDay__selected:hover {
    color: white;
  }
`;

const datePickerStyles = css`
  .DateRangePicker_picker {
    top: 53px !important;
  }

  .DayPicker__withBorder {
    box-shadow: none;
  }

  ${datePickerLine}

  ${dateTitleStyles}

  ${dateNavigationStyles}

  ${dateDayTitleStyles}

  ${dateDayStyles}
`;

const RangeDatePickerWrapper = styled.div`
  --color-accent: rgb(51, 102, 255);
  --color-accent-transparent: rgba(51, 102, 255, 0.16);
  --size-radius: 6px;

  ${datePickerStyles}

  ${inputsStyles}
`;

const RangeDatePicker: React.FC<PickerProps> = ({ onChange }) => {
  const [focusedInput, setFocusedInput] = useState<focusInputType>(null);
  const [date, setDate] = useState<dateType>({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    if (date.startDate && date.endDate) {
      console.log(
        date.startDate?.format("D-MM-Y"),
        date.endDate?.format("D-MM-Y")
      );
    }
  }, [date]);

  //Date picker custom elements
  //Inputs
  const CalendarIcon = (
    <span className="inputs_calendar-icon">
      <img src={calendarIcon} alt="calendar icon" />
    </span>
  );
  const InputArrow = (
    <span className="inputs_arrow">
      <img src={arrowRight} alt="arrow icon" />
    </span>
  );
  //Calendar
  const PrevBtn = (
    <span className="arrow arrow-prev">
      <img src={arrowLeft} alt="arrow left" />
    </span>
  );
  const NextBtn = (
    <span className="arrow arrow-next">
      <img src={arrowRight} alt="arrow right" />
    </span>
  );

  return (
    <RangeDatePickerWrapper>
      <DateRangePicker
        startDate={date.startDate}
        startDateId="start_date_id"
        endDate={date.endDate}
        endDateId="end_date_id"
        onDatesChange={({ startDate, endDate }) =>
          setDate({ startDate, endDate })
        }
        focusedInput={focusedInput}
        onFocusChange={(focusedInput: any) => {
          setFocusedInput(focusedInput);
        }}
        customInputIcon={CalendarIcon}
        inputIconPosition={"after"}
        customArrowIcon={InputArrow}
        noBorder={true}
        block={true}
        numberOfMonths={1}
        navPrev={PrevBtn}
        navNext={NextBtn}
        daySize={33}
        enableOutsideDays={true}
        weekDayFormat={"ddd"}
      />
    </RangeDatePickerWrapper>
  );
};

export default RangeDatePicker;
