const option1 = "Billed Monthly";
const option2 = "Billed Yearly(save 15%)";

export const Tongle = ({ isChecked, setIsChecked }) => {
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div class="flex h-8 justify-center">
      <div
        class="w-100 flex items-center gap-4"
        style={isChecked ? { marginLeft: "40px" } : {}}
      >
        <div
          class="cursor-pointer"
          style={
            isChecked ? {} : { color: "#9400D3", fontSize: 18, fontWeight: 600 }
          }
          onClick={isChecked ? handleCheckboxChange : null}
        >
          {option1}
        </div>
        <div class="mt-2">
          <label class="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              class="peer sr-only"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-purple-300" />
          </label>
        </div>
        <div
          class="cursor-pointer"
          style={
            isChecked ? { color: "#9400D3", fontSize: 18, fontWeight: 600 } : {}
          }
          onClick={isChecked ? null : handleCheckboxChange}
        >
          {option2}
        </div>
      </div>
    </div>
  );
};
