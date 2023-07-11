export interface ForecastData {
    list:    List[];
}

export interface List {
    dt:         number;
    main:       MainClass;
    weather:    Weather[];
}

export interface MainClass {
    temp_min:   number;
    temp_max:   number;
    humidity:   number;
}

export interface Weather {
    icon:        string;
}