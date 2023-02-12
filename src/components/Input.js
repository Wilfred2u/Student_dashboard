const Input = (
    {
        handleCheckboxChange,
        handleChartChange,
        handleClickFun,
        handleClickDifficulty,
        chartType,
        isDataShown,
        isFunShown,
        isDifficultyShown
    }
) => {
    return (
        <div className="input">
            <div>
                <input
                    type="checkbox"
                    id="Evelyn"
                    onChange={handleCheckboxChange}
                    name="Evelyn"
                    checked={isDataShown.Evelyn}
                />
                <label htmlFor="Evelyn">Evelyn</label>
                <input
                    type="checkbox"
                    id="Aranka"
                    onChange={handleCheckboxChange}
                    name="Aranka"
                    checked={isDataShown.Aranka}
                />
                <label htmlFor="Aranka">Aranka</label>
                <input
                    type="checkbox"
                    id="Floris"
                    onChange={handleCheckboxChange}
                    name="Floris"
                    checked={isDataShown.Floris}
                />
                <label htmlFor="Floris">Floris</label>
                <input
                    type="checkbox"
                    id="Hector"
                    onChange={handleCheckboxChange}
                    name="Hector"
                    checked={isDataShown.Hector}
                />
                <label htmlFor="Hector">Hector</label>
                <input
                    type="checkbox"
                    id="Martina"
                    onChange={handleCheckboxChange}
                    name="Martina"
                    checked={isDataShown.Martina}
                />
                <label htmlFor="Martina">Martina</label>
                <input
                    type="checkbox"
                    id="Maurits"
                    onChange={handleCheckboxChange}
                    name="Maurits"
                    checked={isDataShown.Maurits}
                />
                <label htmlFor="Maurits">Maurits</label>
                <input
                    type="checkbox"
                    id="Rahima"
                    onChange={handleCheckboxChange}
                    name="Rahima"
                    checked={isDataShown.Rahima}
                />
                <label htmlFor="Rahima">Rahima</label>
                <input
                    type="checkbox"
                    id="Sandra"
                    onChange={handleCheckboxChange}
                    name="Sandra"
                    checked={isDataShown.Sandra}
                />
                <label htmlFor="Sandra">Sandra</label>
                <input
                    type="checkbox"
                    id="Wietske"
                    onChange={handleCheckboxChange}
                    name="Wietske"
                    checked={isDataShown.Wietske}
                />
                <label htmlFor="Wietske">Wietske</label>
                <input
                    type="checkbox"
                    id="Storm"
                    onChange={handleCheckboxChange}
                    name="Storm"
                    checked={isDataShown.Storm}
                />
                <label htmlFor="Storm">Storm</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="chart-bar-style"
                    name="chartStyle"
                    value="chart-bar-style"
                    checked={chartType.chartStyle === "chart-bar-style"}
                    onChange={handleChartChange}
                />
                <label htmlFor="chart-bar-style">Bar chart</label>
                <br />
                <input
                    type="radio"
                    id="chart-line-style"
                    name="chartStyle"
                    value="chart-line-style"
                    checked={chartType.chartStyle === "chart-line-style"}
                    onChange={handleChartChange}
                />
                <label htmlFor="chart-line-style">Line chart</label>
            </div>
            <div>
                <button
                    className="button-funchart"
                    onClick={handleClickFun}>{isFunShown ? "Hide" : "Show"} fun chart</button>
                <br />
                <button
                    className="button-difchart"
                    onClick={handleClickDifficulty}>{isDifficultyShown ? "Hide" : "Show"} difficulty chart</button>
            </div>
        </div>
    )
};

export default Input;