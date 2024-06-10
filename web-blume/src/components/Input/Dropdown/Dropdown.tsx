import React, { useState } from "react";
import * as S from "./dropdown.styled";
import Label from "../Label/Label";
import { Button, DropdownMenu } from "@radix-ui/themes";

const Dropdown: React.FC<S.DropDownProps> = ({
  size,
  label,
  placeholder,
  list,
  theme,
  onChange,
  ...rest
}) => {
  const [text, setText] = useState("");
  const [isSelected, setIsSelected] = useState<boolean>(false);

  function handleClick(text: string) {
    setText(text);
    setIsSelected(true);
    // console.log(isSelected);
  }

  function makeItems() {
    let items = [];
    for (let i = 0; i < list.length; i++) {
      const el = list[i];

      items.push(
        <S.Item theme={theme} onClick={() => handleClick(el)} key={i}>
          {el}
        </S.Item>
      );
    }

    return items;
  }

  return (
    <S.InputContainer size={size}>
      <Label label={label} />
      <S.Container>
        <S.Trigger isSelected={isSelected}>
          <S.Button variant="soft">
            {text == "" ? placeholder : text}
            {/* {text} */}
            <DropdownMenu.TriggerIcon />
          </S.Button>
        </S.Trigger>

        <S.Content>{makeItems()}</S.Content>
      </S.Container>
    </S.InputContainer>
  );
};

{
  /* <S.InputContainer size={size}>
      <Label label={label} />
      <S.DropDown
        list={list}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </S.InputContainer> */
}

// const DropDown: React.FC<S.DropDownProps> = (
//   {
//     //   size,
//     //   label,
//     //   placeholder,
//     //   value,
//     //   list,
//     //   onChange,
//     //   ...rest
//   }
// ) => (
//   <S.Root>
//     <S.Trigger>
//       <Button variant="soft">
//         Options
//         <S.TriggerIcon />
//       </Button>
//     </S.Trigger>
//     <S.Content>
//       <S.Item shortcut="⌘ E">Edit</S.Item>
//       <S.Item shortcut="⌘ D">Duplicate</S.Item>
//       <S.Separator />
//       <S.Item shortcut="⌘ N">Archive</S.Item>

//       <S.Sub>
//         <S.SubTrigger>More</S.SubTrigger>
//         <S.SubContent>
//           <S.Item>Move to project…</S.Item>
//           <S.Item>Move to folder…</S.Item>

//           <S.Separator />
//           <S.Item>Advanced options…</S.Item>
//         </S.SubContent>
//       </S.Sub>

//       <S.Separator />
//       <S.Item>Share</S.Item>
//       <S.Item>Add to favorites</S.Item>
//       <S.Separator />
//       <S.Item shortcut="⌘ ⌫" color="red">
//         Delete
//       </S.Item>
//     </S.Content>
//   </S.Root>
// );

export default Dropdown;
