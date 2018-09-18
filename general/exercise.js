

var countryList = {
  countries: [],
  // displayCountries: function() {
  //     if(this.countries.length === 0 ) {
  //       console.log('The country list is empty');
  //     } else {
  //       console.log('My countries: ');
  //         for( var i = 0; i < this.countries.length; i++ ) {
  //           if(this.countries[i].completed === true ) {
  //             console.log('(x)', this.countries[i].textCountry);
  //           } else {
  //             console.log('()', this.countries[i].textCountry);
  //           }
  //        }
  //     }
  // },
  addToCountry: function(textCountry) {
    this.countries.push({
      textCountry: textCountry,
      completed: false
    });
    // this.displayCountries();
  },
  changeCountry: function(position, textCountry) {
    this.countries[position].textCountry = textCountry;
    // this.displayCountries();
  },
  deleteCountry: function(position) {
    this.countries.splice(position, 1);
    // this.displayCountries();
  },
  toggleCompleted: function(position) {
    var country = this.countries[position];
    country.completed = !country.completed;
    // this.displayCountries();
  },
  toggleAll: function() {
    var completedCountries = 0;
    var totalCountries = this.countries.length;

    // Get number of completed countries.
      for(var i = 0; i < totalCountries.length; i++) {
        if(this.countries[i].completed === true ) {
          completedCountries++;
        }
      }
   // Case 1: If everythings true, make everything false
      if(completedCountries === totalCountries ) {
        for(var i = 0; i < totalCountries; i++) {
          this.countries[i].completed = false;
        }
   // Case 2: Make everything true
        } else {
          for(var i = 0; i < totalCountries; i++) {
            this.countries[i].completed = true;
          }
        }
      // this.displayCountries();
   }
};

// var displayCountriesButton = document.getElementById('displayCountriesButton');
// displayCountriesButton.addEventListener('click', function() {
//   countryList.displayCountries();
// });
//
// var toggleAllButton = document.getElementById('toggleAllButton');
// toggleAllButton.addEventListener('click', function() {
//   countryList.toggleAll();
// });

// Handlers object - for events on objects

var handlers = {
  // displayCountries: function() {
  //   countryList.displayCountries();
  // },
  addToCountry: function() {
    var addCountryTextInput = document.getElementById('addCountryTextInput');
    countryList.addToCountry(addCountryTextInput.value);
    addCountryTextInput.value = "";
    view.displayCountries();
  },
  changeCountry: function() {
    var changeCountryPositionInput = document.getElementById('changeCountryPositionInput');
    var changeCountryTextInput = document.getElementById('changeCountryTextInput');
    countryList.changeCountry(changeCountryPositionInput.valueAsNumber, changeCountryTextInput.value);
    changeCountryPositionInput.value = "";
    changeCountryTextInput.value = "";
    view.displayCountries();
  },
  deleteCountry: function(position) {
    // var deleteCountryPositionInput = document.getElementById('deleteCountryPositionInput');
    countryList.deleteCountry(position);
    // deleteCountryPositionInput.value = "";
    view.displayCountries();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    countryList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.valueAsNumber = "";
    view.displayCountries();
  },
  toggleAll: function() {
    countryList.toggleAll();
    view.displayCountries();
  }
};

/// View object - displaying the list dynamically into the document

var view = {
    displayCountries: function() {
      var countriesUl = document.querySelector('ul');
      countriesUl.innerHTML = "";
      for( var i = 0; i < countryList.countries.length; i++) {
        var countriesLi = document.createElement('li');
        var country = countryList.countries[i];
        var countryTextWithCompletion = "";

        if (country.completed === true ) {
            countryTextWithCompletion = ('x') + country.textCountry;
        } else {
            countryTextWithCompletion = (' ') + country.textCountry;
        }

        countriesLi.id = i;
        countriesLi.textContent = countryTextWithCompletion;
        countriesLi.appendChild(this.createDeleteButton());
        countriesUl.appendChild(countriesLi);
    }
  },
    createDeleteButton: function() {
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'deleteButton';
      return deleteButton;
    },
    setUpEventListeners: function() {
      var countriesUl = document.querySelector('ul');

      countriesUl.addEventListener('click', function(event){
        var elementClicked = event.target;

        if (elementClicked.className === 'deleteButton') {
          handlers.deleteCountry(parseInt(elementClicked.parentNode.id));
        }
      });
    }
};

view.setUpEventListeners();
