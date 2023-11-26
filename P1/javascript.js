//Función para conectar con la base de datos y extraer las consultas generadas (para index.html)
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
            var cpus = obj.cpus;
            var gpus = obj.gpus;
            var mobosSocketIntel = obj.mobosSocketIntel;
            var mobosSocketAMD = obj.mobosSocketAMD;
            var cpusSockIntel = obj.cpusSockIntel;
            var cpusSockAMD = obj.cpusSockAMD;
            var ram = obj.ram;
            var storage = obj.storage;
            var ramsizecount = obj.ramsizecount;
            var storagesizecount = obj.storagesizecount;
            primergrafico(cpusIntel, cpusAMD, gpusNVIDIA, gpusAMD, mobosIntel, mobosAMD);
            segundografico(cpus, gpus);
            tercergrafico(cpusSockIntel, cpusSockAMD, mobosSocketIntel, mobosSocketAMD);
            cuartografico(ram, storage, ramsizecount, storagesizecount);
        }
    });
}

//Función para conectar con la base de datos y extraer las consultas generadas (para specs.html)
//para la página myPC
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

//Función que dibuja el gráfico de las especificaciones del PC
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
            inverted: true,
            type: 'organization',
            backgroundColor: '#0f0f3d'
        },

        title: {
            text: 'My PC Specifications',
            style: {
                color: 'white' // Cambia el color del texto a blanco
            }
        },

        series: [
            {
                data: [
                    [psu, cpu],
                    [psu, cooler],
                    [psu, memory],
                    [psu, storage1],
                    [psu, storage2],
                    [psu, gpu],
                    [psu, tower],
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
            type: 'column',
            backgroundColor: '#0f0f3d'
        },
        title: {
            text: 'Brand Distribution',
            style: {
                color: 'white'
            }
        },
        xAxis: {
            categories: ['CPU', 'GPU', 'Motherboard'],
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            labels: {
                format: '{value} %',
                style: {
                    color: 'white'
                }
            },
            min: 0,
            title: {
                text: null,
                style: {
                    color: 'white'
                }
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
        ],
        legend: {
            itemStyle: {
                color: 'white' // Cambia el color del texto de la leyenda a blanco
            }
        },
    });
}


//Función que dibuja el gráfico de todas las combinaciones de CPU+GPU para analizar el consumo en Watts
function segundografico(cpus, gpus) {
    var combinaciones = [];
    var nombresCombs = [];
    for (var i = 0; i < cpus.length; i++) {
        for (var j = 0; j < gpus.length; j++) {
            x = cpus[i][2] + " + " + gpus[j][2];
            combinaciones.push(
                parseInt(cpus[i][10]) + parseInt(gpus[j][8])
            );
            nombresCombs.push(x);
        }
    }

    console.time('scatter');
    Highcharts.chart('grafico2', {
        chart: {
            zoomType: 'x',
            backgroundColor: '#0f0f3d'
        },
        title: {
            text: 'All CPU+GPU Combinations’ Power Consumption in Watts',
            style: {
                color: 'white'
            }
        },
        xAxis: {
            type: 'number',
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        plotOptions: {
            series: {
                pointStart: 0
            }
        },
        series: [{
            type: 'scatter',
            data: combinaciones,
            marker: {
                radius: 1
            },
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
        },
        legend: {
            itemStyle: {
                color: 'white'
            }
        }
    });
    console.timeEnd('scatter');
}


//Función que dibuja el gráfico de los dos pie-donut charts
function tercergrafico(cpusSockIntel, cpusSockAMD, mobosSockIntel, mobosSockAMD) {
    var intels = new Set();
    for (var j = 0; j < cpusSockIntel.length; j++) {
        intels.add(cpusSockIntel[j][0]);
    }
    var intel = Array.from(intels);
    var porcentajesIntel = Array(intel.length);

    for (var i = 0; i < intel.length; i++) {
        porcentajesIntel[i] = 0;
    }

    for (var i = 0; i < cpusSockIntel.length; i++) {
        for (var j = 0; j < porcentajesIntel.length; j++) {
            if (cpusSockIntel[i][0] == intel[j]) {
                porcentajesIntel[j]++;
            }
        }
    }

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

    for (var i = 0; i < amd.length; i++) {
        porcentajesAMD[i] = 0;
    }

    for (var i = 0; i < cpusSockAMD.length; i++) {
        for (var j = 0; j < porcentajesAMD.length; j++) {
            if (cpusSockAMD[i][0] == amd[j]) {
                porcentajesAMD[j]++;
            }
        }
    }

    for (var i = 0; i < porcentajesAMD.length; i++) {
        porcentajesAMD[i] = (porcentajesAMD[i] / cpusSockAMD.length) * 100
        porcentajesAMD[i] = Math.round((porcentajesAMD[i] + Number.EPSILON) * 100) / 100;
    }

    var colors = ['#0071c5', '#ef0707'],
        categories = ['Intel', 'AMD'],
        data = [{
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

    for (i = 0; i < dataLen; i += 1) {
        cpuData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

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

    var porcentajesIntelMOBO = Array(intel.length);
    for (var i = 0; i < intel.length; i++) {
        porcentajesIntelMOBO[i] = 0;
    }
    for (var i = 0; i < mobosSockIntel.length; i++) {
        for (var j = 0; j < porcentajesIntelMOBO.length; j++) {
            if (mobosSockIntel[i][0] == intel[j]) {
                porcentajesIntelMOBO[j]++;
            }
        }
    }
    for (var i = 0; i < porcentajesIntelMOBO.length; i++) {
        porcentajesIntelMOBO[i] = (porcentajesIntelMOBO[i] / mobosSockIntel.length) * 100
        porcentajesIntelMOBO[i] = Math.round((porcentajesIntelMOBO[i] + Number.EPSILON) * 100) / 100;
    }

    var porcentajesAMDMOBO = Array(amd.length);
    for (var i = 0; i < amd.length; i++) {
        porcentajesAMDMOBO[i] = 0;
    }
    for (var i = 0; i < mobosSockAMD.length; i++) {
        for (var j = 0; j < porcentajesAMDMOBO.length; j++) {
            if (mobosSockAMD[i][0] == amd[j]) {
                porcentajesAMDMOBO[j]++;
            }
        }
    }
    for (var i = 0; i < porcentajesAMDMOBO.length; i++) {
        porcentajesAMDMOBO[i] = (porcentajesAMDMOBO[i] / mobosSockAMD.length) * 100
        porcentajesAMDMOBO[i] = Math.round((porcentajesAMDMOBO[i] + Number.EPSILON) * 100) / 100;
    }

    var colors = ['#0071c5', '#ef0707'],
        categories = ['Intel', 'AMD'],
        data2 = [{
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

    for (i = 0; i < dataLen; i += 1) {
        cpuData2.push({
            name: categories[i],
            y: data2[i].y,
            color: data2[i].color
        });

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

    Highcharts.chart('grafico3', {
        chart: {
            type: 'pie',
            backgroundColor: '#0f0f3d'
        },
        title: {
            text: 'CPU Socket Distribution',
            style: {
                color: 'white'
            }
        },
        subtitle: {
            text: 'Sockets overall in CPUs (left)<br><br> Sockets overall in Motherboards (right)',
            style: {
                color: 'white'
            }
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
            },
            {
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
                        fontWeight: 'normal',
                        color: '#ffffff',
                        distance: -20
                    }
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


//Función que dibuja el gráfico treemap de los tamaños de RAM y almacenamiento
function cuartografico(ram, storage, ramsizecount, storagesizecount) {
    const color = ['#2898ee', '#107acc', '#0cbccc', '#15297c', '#c20000', '#ff9688', '#ff0000', '#ff4040'];
    var rams = new Set();
    for (var j = 0; j < ram.length; j++) {
        if (ram[j][5].length == 4) {
            rams.add(ram[j][5]);
        }
    }
    var ramtypes = Array.from(rams);
    var countram = Array(ramtypes.length);

    for (var i = 0; i < ramtypes.length; i++) {
        countram[i] = 0;
    }

    for (var i = 0; i < ram.length; i++) {
        for (var j = 0; j < ramtypes.length; j++) {
            if (ram[i][5] == ramtypes[j]) {
                countram[j]++;
            }
        }
    }

    var storages = new Set();
    for (var j = 0; j < storage.length; j++) {
        storages.add(storage[j][5]);
    }
    var storagetypes = Array.from(storages);
    var countstorage = Array(storagetypes.length);

    for (var i = 0; i < storagetypes.length; i++) {
        countstorage[i] = 0;
    }

    for (var i = 0; i < storage.length; i++) {
        for (var j = 0; j < storagetypes.length; j++) {
            if (storage[i][5] == storagetypes[j]) {
                countstorage[j]++;
            }
        }
    }

    function generateTreemapData(id, name, value, color, parent, level) {
        return {
            id: id,
            name: name,
            value: value,
            color: color,
            parent: parent,
            level: level
        };
    }

    const ramData = [];
    ramData.push(generateTreemapData('Memory', 'Memory', ram.length, color[0], '', 1));

    for (let i = 0; i < ramtypes.length; i++) {
        const typeId = ramtypes[i];
        ramData.push(generateTreemapData(typeId, typeId, countram[i], color[i + 1], 'Memory', 2));

        for (let j = 0; j < ramsizecount.length; j++) {
            const sizeId = ramsizecount[j][1];
            const parentType = ramsizecount[j][0];
            if (parentType === typeId) {
                ramData.push(generateTreemapData(sizeId, sizeId + 'GB', parseInt(ramsizecount[j][2]), color[i + 1], typeId, 3));
            }
        }
    }

    const storageData = [];
    storageData.push(generateTreemapData('Storage', 'Storage', storage.length, color[4], '', 1));

    for (let i = 0; i < storagetypes.length; i++) {
        const typeId = storagetypes[i];
        storageData.push(generateTreemapData(typeId, typeId, countstorage[i], color[i + 5], 'Storage', 2));

        for (let j = 0; j < storagesizecount.length; j++) {
            const sizeId = storagesizecount[j][1];
            const parentType = storagesizecount[j][0];
            if (parentType === typeId) {
                storageData.push(generateTreemapData(sizeId, sizeId + 'GB', parseInt(storagesizecount[j][2]), color[i + 5], typeId, 3));
            }
        }
    }

    Highcharts.chart('grafico4', {
        title: {
            text: 'RAM and Storage Size Distribution per Type',
            style: {
                color: 'white'
            }
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}</b>: <b>{point.value}</b> Units',
            style: {
                color: 'black'
            }
        },
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            layoutStartingDirection: 'vertical',
            allowDrillToNode: true,
            animationLimit: 1000,
            dataLabels: {
                enabled: true,
                style: {
                    color: 'white'
                }
            },
            levelIsConstant: true,
            data: [...ramData, ...storageData]
        }],
        chart: {
            backgroundColor: '#0f0f3d'
        }
    });
}

