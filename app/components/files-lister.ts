import Component from '@ember/component';

export default class FilesLister extends Component.extend({
    inputValue: "",
    numberOfPages: 1,
    startPage: 1,

    init() {
        this._super(...arguments);
        if (this.restart) {
            this.send('handleFilterEntries', 1, true);
        } else {
            this.send('handleFilterEntries', this.page, false);
        }
    },

    actions: {  // special functions that can be called in templates
        handleFilterEntries(page: number, resetStartPage: boolean) {
            let inputValue = this.inputValue;
            let filterAction = this.filter;

            // filters given the typed in stuff from the input field
            // and sets then the filtered results as the returned results "results"
            filterAction(inputValue, page).then((resultsStruct) => {
                if (resultsStruct.query === this.inputValue) {  // only if the results are for the current input
                    this.set("results", resultsStruct.results);
                    this.set("numberOfPages", resultsStruct.meta.pages);

                    // whenever the input has changed, show numbers right from the beginning on and reset selected page
                    if (resetStartPage) {
                        this.set("startPage", 1);
                        this.set("page", 1);
                    }
                }
            });

            if (resetStartPage) {  // only if something is typed in, else it is automatically resetted
                if (window.bitcorn.imageHasBeenEnlarge) {
                    this.resetImageSize();
                    window.bitcorn.imageHasBeenEnlarge = false;
                }
            }
        },

        setCurrentPage(page: number, numberOfPages: number) {
            if (page >= 1 && page <= numberOfPages) {
                this.setPage(page);
                this.send('handleFilterEntries', page, false);
            }
        }
    },

    resetImageSize() {
        if (this.$(".subcontainer a") !== undefined && this.$(".subcontainer a").length > 0) {
            let elements = this.$(".subcontainer a");

            elements.each(function (index, element) {
                if (index %2 === 0) {
                    element.style.height = "120px";
                    element.style.width = "120px";
                } else {
                    element.classList.add("sprite-enlarge");
                    element.classList.remove("sprite-reduce");
                }
            });
        } else {  // usually not called, due to the global imageHasBeenEnlarged-variable
            // properly waiting in modern browsers until element is rendered (timeouts are not used anymore)
            window.requestAnimationFrame(this.resetImageSize.bind(this));
        }
    }
}) {
  // normal class body definition here
};
