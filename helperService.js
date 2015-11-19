( function () {
    /*eslint-disable */
    "use strict";

    angular.module( "HelperService" )
        .factory( "ArrayService", [ function () {

            var sortByKey = function ( array, key1 ) {
                    return array.sort( function ( a, b ) {
                        var x1 = a[ key1 ];
                        var x2 = b[ key1 ];

                        if ( x1 !== x2 ) {
                            if ( x1 < x2 ) return -1; // x1 goes nearer to the top
                            if ( x1 > x2 ) return 1; // x1 goes nearer to the bottom
                            return 0; // both are the same
                        }
                    } );
                },

                findIndexByKeyValue = function ( array, key, valuetosearch ) {
                    for ( var i = 0; i < array.length; i++ ) {
                        if ( array[ i ][ key ] === valuetosearch ) {
                            return i;
                        }
                    }
                    return null;
                },

                combineArray = function ( a, b ) {
                    // `b` onto `a`:
                    a.reduce( function ( coll, item ) {
                        coll.push( item );
                        return coll;
                    }, b );
                    return b;
                }

            return {
                sortByKey: sortByKey,
                findIndexByKeyValue: findIndexByKeyValue,
                combineArray: combineArray
            }

        } ] )

} )();
