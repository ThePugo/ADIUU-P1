function conexionphp() {
    $.ajax({
        url: 'conexion.php', // archivo php
        type: 'GET', // tipo de peticion HTTP
        success: function (data) {
            var obj = jQuery.parseJSON(data);
            var cpusIntel = obj.cpusIntel;
            var cpusAMD = obj.cpusAMD;
            var gpusNVIDIA = obj.gpusNVIDIA;
            var gpusAMD = obj.gpusAMD;
            var mobosIntel = obj.mobosIntel;
            var mobosAMD = obj.mobosAMD;
            var psus = obj.psus;
            var cpus = obj.cpus;
            var gpus = obj.gpus;
            var mobosSocketIntel = obj.mobosSocketIntel;
            var mobosSocketAMD = obj.mobosSocketAMD;
            var cpusSockIntel = obj.cpusSockIntel;
            var cpusSockAMD = obj.cpusSockAMD;
            primergrafico(cpusIntel, cpusAMD, gpusNVIDIA, gpusAMD, mobosIntel, mobosAMD);
            segundografico(cpus, gpus);
            tercergrafico(cpusSockIntel, cpusSockAMD, mobosSocketIntel, mobosSocketAMD);
        }
    });
}

function conexion2() {
    $.ajax({
        url: 'conexion.php', // archivo php
        type: 'GET', // tipo de peticion HTTP
        success: function (data) {
            var obj = jQuery.parseJSON(data);
            var mypccpu1 = obj.mypccpu1;
            var mypccooler1 = obj.mypccooler1;
            var mypcgpu1 = obj.mypcgpu1;
            var mypcmemory1 = obj.mypcmemory1;
            var mypcmobo1 = obj.mypcmobo1;
            var mypcpsu1 = obj.mypcpsu1;
            var mypcstorage11 = obj.mypcstorage11;
            var mypcstorage21 = obj.mypcstorage21;
            var mypccase1 = obj.mypccase1;
            primergraficopc(mypccpu1, mypccooler1, mypcgpu1, mypcmemory1, mypcmobo1, mypcpsu1, mypcstorage11, mypcstorage21, mypccase1);
        }
    });
}

function primergraficopc(mypccpu1, mypccooler1, mypcgpu1, mypcmemory1, mypcmobo1, mypcpsu1, mypcstorage11, mypcstorage21, mypccase1) {
    var cpu = mypccpu1[0][2].split('(')[0];
    var cooler = mypccooler1[0][2].split('(')[0];
    var parts = mypcgpu1[0][2].split("GeForce");
    var gpu = "GeForce" + parts[1].split("Card")[0] + "Card";
    var memory = mypcmemory1[0][2].split('(')[0];
    var mobo = mypcmobo1[0][2].split('(')[0];
    var psu = mypcpsu1[0][2].split('(')[0];
    var storage1 = mypcstorage11[0][2].split('(')[0];
    var storage2 = mypcstorage21[0][2].split('(')[0];
    var tower = mypccase1[0][2].split('(')[0];

    Highcharts.chart('graficopc1', {
        chart: {
            inverted:true,
            type: 'organization'
        },
    
        title: {
            text: 'My PC Specifications'
        },

        
    
        series: [
            {
                data: [
                    [cpu,gpu],
                    [psu, cpu],
                    [psu, cooler],
                    [psu, memory],
                    [psu, storage1],
                    [psu, storage2],
                    [psu, gpu],
                    [psu,tower],
                    [mobo, cooler],
                    [mobo, gpu],
                    [mobo, memory],
                    [mobo, cpu],
                    [mobo, psu],
                    [mobo, storage1],
                    [mobo, storage2],
                    [mobo, tower]
                ],
                nodes: [
                    {
                        id: cpu,
                        description: 'CPU',
                        image: mypccpu1[0][3]
                    },
                    {
                        id: memory,
                        description: 'RAM (4x8)',
                        image: mypcmemory1[0][3]
                    },
                    {
                        id: mobo,
                        description: 'Motherboard',
                        image: mypcmobo1[0][3]
                    },
                    {
                        id: tower,
                        description: 'Case',
                        image: mypccase1[0][3]
    
                    },
                    {
                        id: psu,
                        description: 'PSU',
                        image: mypcpsu1[0][3]
    
                    },
                    {
                        id: cooler,
                        description: 'Cooler',
                        image: mypccooler1[0][3]
    
                    },
                    {
                        id: storage1,
                        description: 'Storage 1',
                        image: mypcstorage11[0][3]
                    },
                    {
                        id: gpu,
                        description: 'GPU',
                        image: mypcgpu1[0][3]
                    },
                    {
                        id: storage2,
                        description: 'Storage 2',
                        image: mypcstorage21[0][3]
                    }
                ],
                colorByPoint: true,
                color: '#007ad0',
                dataLabels: {
                    enabled: true,
                    color: 'white'
                },
                borderColor: 'white',
                nodeWidth: 65,
            }
        ],
        tooltip: {
            outside: true
        },
        exporting: {
            allowHTML: true,
            sourceWidth: 800,
            sourceHeight: 600
        },
    });
}

//Funcion que dibuja el grafico de la distribución de marcas en el mercado
function primergrafico(cpusIntel, cpusAMD, gpusNVIDIA, gpusAMD, mobosIntel, mobosAMD) {
    var cpusTotal = parseInt(cpusIntel) + parseInt(cpusAMD);
    var porcentajeCAMD = (cpusAMD / cpusTotal) * 100;
    var porcentajeCIntel = (cpusIntel / cpusTotal) * 100;

    var gpusTotal = parseInt(gpusNVIDIA) + parseInt(gpusAMD);
    var porcentajeGAMD = (gpusAMD / gpusTotal) * 100;
    var porcentajeGNVIDIA = (gpusNVIDIA / gpusTotal) * 100;

    var mobosTotal = parseInt(mobosIntel) + parseInt(mobosAMD);
    var porcentajeMIntel = (mobosIntel / mobosTotal) * 100;
    var porcentajeMAMD = (mobosAMD / mobosTotal) * 100;

    Highcharts.setOptions({
        colors: ['#ED1C24', '#0071c5', '#76b900']
    });

    Highcharts.chart('grafico1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Brand Distribution'
        },
        xAxis: {
            categories: ['CPU', 'GPU', 'Motherboard'],
        },
        yAxis: {
            labels: {
                format: '{value} %'
            },
            min: 0,
            title: {
                text: null
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [
            {
                name: 'AMD',
                data: [porcentajeCAMD, porcentajeGAMD, porcentajeMAMD]
            },
            {
                name: 'Intel',
                data: [porcentajeCIntel, 0, porcentajeMIntel]
            },
            {
                name: 'Nvidia',
                data: [0, porcentajeGNVIDIA, 0]
            }
        ]
    });
}

//Función que dibuja el gráfico de todas las combinaciones de CPU+GPU para analizar el consumo en Watts
function segundografico(cpus, gpus) {
    var combinaciones = [];
    var nombresCombs = [];
    for (var i = 0; i < cpus.length; i++) {
        for (var j = 0; j < gpus.length; j++) {
            //se cogen los nombres de las combinaciones
            x = cpus[i][2] + " + " + gpus[i][2];
            combinaciones.push(
                //se cogen los valores de las combinaciones
                parseInt(cpus[i][10]) + parseInt(gpus[j][8])
            );
            nombresCombs.push(x);
        }
    }

    console.time('line');
    Highcharts.chart('grafico2', {

        chart: {
            zoomType: 'x'
        },

        title: {
            text: 'All CPU+GPU Combinations’ Power Consumption in Watts'
        },


        accessibility: {
            screenReaderSection: {
                beforeChartFormat: '<{headingTagName}>{chartTitle}</{headingTagName}><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div>'
            }
        },

        tooltip: {
            valueDecimals: 2
        },

        xAxis: {
            type: 'number'
        },

        plotOptions: {
            series: {
                pointStart: 0 // Establece el punto de inicio en 0 para asignar nombres.
            }
        },
        series: [{
            data: combinaciones,
            lineWidth: 0.5,
            showInLegend: false
        }],
        tooltip: {
            formatter: function () {
                var index = this.point.index;
                return nombresCombs[index] + ': ' + this.y + ' W';
            }
        },


        legend: {
            enabled: false
        }

    });
    console.timeEnd('line');
}

//Función que dibuja el gráfico de los dos pie-donut charts
function tercergrafico(cpusSockIntel, cpusSockAMD, mobosSockIntel, mobosSockAMD) {
    //VARIABLES PRIMERA GRÁFICA
    var intels = new Set();
    for (var j = 0; j < cpusSockIntel.length; j++) {
        intels.add(cpusSockIntel[j][0]);
    }
    var intel = Array.from(intels);
    var porcentajesIntel = Array(intel.length);

    // Inicializar el objeto con los valores distintos de sockets y establecer el contador en 0
    for (var i = 0; i < intel.length; i++) {
        porcentajesIntel[i] = 0;
    }

    // Recorrer el array cpusSockIntel y contar las apariciones de cada socket
    for (var i = 0; i < cpusSockIntel.length; i++) {
        for (var j = 0; j < porcentajesIntel.length; j++) {
            if (cpusSockIntel[i][0] == intel[j]) {
                porcentajesIntel[j]++;
            }
        }
    }
    //Ajustar el porcentaje de aparición de cada socket
    for (var i = 0; i < porcentajesIntel.length; i++) {
        porcentajesIntel[i] = (porcentajesIntel[i] / cpusSockIntel.length) * 100
        porcentajesIntel[i] = Math.round((porcentajesIntel[i] + Number.EPSILON) * 100) / 100;
    }

    var amds = new Set();
    for (var j = 0; j < cpusSockAMD.length; j++) {
        amds.add(cpusSockAMD[j][0]);
    }
    var amd = Array.from(amds);
    var porcentajesAMD = Array(amd.length);

    // Inicializar el objeto con los valores distintos de sockets y establecer el contador en 0
    for (var i = 0; i < amd.length; i++) {
        porcentajesAMD[i] = 0;
    }

    // Recorrer el array cpusSockAMD y contar las apariciones de cada socket
    for (var i = 0; i < cpusSockAMD.length; i++) {
        for (var j = 0; j < porcentajesAMD.length; j++) {
            if (cpusSockAMD[i][0] == amd[j]) {
                porcentajesAMD[j]++;
            }
        }
    }
    //Ajustar el porcentaje de aparición de cada socket
    for (var i = 0; i < porcentajesAMD.length; i++) {
        porcentajesAMD[i] = (porcentajesAMD[i] / cpusSockAMD.length) * 100
        porcentajesAMD[i] = Math.round((porcentajesAMD[i] + Number.EPSILON) * 100) / 100;
    }

    //PREPARACIÓN VARIABLES PARA PIE CHART 1
    var colors = ['#0071c5', '#ef0707'],
        categories = [
            'Intel',
            'AMD'
        ],
        data = [
            {
                y: Math.round((((cpusSockIntel.length) / (cpusSockAMD.length + cpusSockIntel.length)) * 100 + Number.EPSILON) * 100) / 100,
                color: colors[0],
                drilldown: {
                    name: 'Intel',
                    categories: intel,
                    data: porcentajesIntel
                }
            },
            {
                y: Math.round((((cpusSockAMD.length) / (cpusSockAMD.length + cpusSockIntel.length)) * 100 + Number.EPSILON) * 100) / 100,
                color: colors[1],
                drilldown: {
                    name: 'AMD',
                    categories: amd,
                    data: porcentajesAMD
                }
            },
        ],
        cpuData = [],
        socketsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    //construye los arrays de datos
    for (i = 0; i < dataLen; i += 1) {

        //añade el array de data de cpu
        cpuData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        //añade las versiones de sockets de cpu
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            socketsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.color(data[i].color).brighten(brightness).get()
            });
        }
    }

    //VARIABLES SEGUNDA GRÁFICA
    var porcentajesIntelMOBO = Array(intel.length);
    // Inicializar el objeto con los valores distintos de sockets y establecer el contador en 0
    for (var i = 0; i < intel.length; i++) {
        porcentajesIntelMOBO[i] = 0;
    }
    // Recorrer el array mobosSockIntel y contar las apariciones de cada socket
    for (var i = 0; i < mobosSockIntel.length; i++) {
        for (var j = 0; j < porcentajesIntelMOBO.length; j++) {
            if (mobosSockIntel[i][0] == intel[j]) {
                porcentajesIntelMOBO[j]++;
            }
        }
    }
    //Ajustar el porcentaje de aparición de cada socket
    for (var i = 0; i < porcentajesIntelMOBO.length; i++) {
        porcentajesIntelMOBO[i] = (porcentajesIntelMOBO[i] / mobosSockIntel.length) * 100
        porcentajesIntelMOBO[i] = Math.round((porcentajesIntelMOBO[i] + Number.EPSILON) * 100) / 100;
    }

    var porcentajesAMDMOBO = Array(amd.length);
    // Inicializar el objeto con los valores distintos de sockets y establecer el contador en 0
    for (var i = 0; i < amd.length; i++) {
        porcentajesAMDMOBO[i] = 0;
    }
    // Recorrer el array mobosSockAMD y contar las apariciones de cada socket
    for (var i = 0; i < mobosSockAMD.length; i++) {
        for (var j = 0; j < porcentajesAMDMOBO.length; j++) {
            if (mobosSockAMD[i][0] == amd[j]) {
                porcentajesAMDMOBO[j]++;
            }
        }
    }
    //Ajustar el porcentaje de aparición de cada socket
    for (var i = 0; i < porcentajesAMDMOBO.length; i++) {
        porcentajesAMDMOBO[i] = (porcentajesAMDMOBO[i] / mobosSockAMD.length) * 100
        porcentajesAMDMOBO[i] = Math.round((porcentajesAMDMOBO[i] + Number.EPSILON) * 100) / 100;
    }

    //PREPARACIÓN VARIABLES PARA PIE CHART 2
    var colors = ['#0071c5', '#ef0707'],
        categories = [
            'Intel',
            'AMD'
        ],
        data2 = [
            {
                y: Math.round((((mobosSockIntel.length) / (mobosSockIntel.length + mobosSockAMD.length)) * 100 + Number.EPSILON) * 100) / 100,
                color: colors[0],
                drilldown: {
                    name: 'Intel',
                    categories: intel,
                    data: porcentajesIntelMOBO
                }
            },
            {
                y: Math.round((((mobosSockAMD.length) / (mobosSockIntel.length + mobosSockAMD.length)) * 100 + Number.EPSILON) * 100) / 100,
                color: colors[1],
                drilldown: {
                    name: 'AMD',
                    categories: amd,
                    data: porcentajesAMDMOBO
                }
            },
        ],
        cpuData2 = [],
        socketsData2 = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    //construye los arrays de datos
    for (i = 0; i < dataLen; i += 1) {

        //añade el array de data de cpu
        cpuData2.push({
            name: categories[i],
            y: data2[i].y,
            color: data2[i].color
        });

        //añade la versiones de sockets de cpu
        drillDataLen = data2[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            socketsData2.push({
                name: data2[i].drilldown.categories[j],
                y: data2[i].drilldown.data[j],
                color: Highcharts.color(data2[i].color).brighten(brightness).get()
            });
        }
    }

    //creación de la gráfica
    Highcharts.chart('grafico3', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'CPU Socket Distribution'
        },
        subtitle: {
            text: 'Sockets overall in CPUs (left)<br><br> Sockets overall in Motherboards (right)'
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['30%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'CPU',
            data: cpuData,
            size: '60%',
            dataLabels: {
                color: '#ffffff',
                distance: -75
            }
        }, {
            name: 'Sockets in CPU',
            data: socketsData,
            size: '60%',
            innerSize: '60%',
            dataLabels: {
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 1
                },
                style: {
                    fontWeight: 'normal'
                },
                color: '#ffffff',
                distance: -20
            },
            id: 'sockets'
        },
        {
            name: 'Sockets in MOBO',
            data: socketsData2,
            size: '60%',
            center: ['80%', '50%'],
            dataLabels: {
                color: '#ffffff',
                distance: -20,
                style: {
                    fontWeight: 'normal'
                },
            },
        },
        {
            name: 'CPU',
            data: cpuData2,
            size: '35%',
            center: ['80%', '50%'],
            dataLabels: {
                color: '#ffffff',
                distance: -30
            },
        }
        ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    series: [{
                    }, {
                        id: 'sockets',
                        dataLabels: {
                            enabled: false
                        }
                    }]
                }
            }]
        }
    });
}