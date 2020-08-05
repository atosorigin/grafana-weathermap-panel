# How to add a global JSON file

[![](../../screenshots/other/Go-back.png)](README.md)

The following tutorial will show you how to import the different JSON files presented in [tutorial1](tutorial1.md) into a single global.json file.

## Adding a Query

![step 05](../../screenshots/demo/tutorial01/step05.jpg)

The first step is through the `Queries` tab.

You must:

- Complete the line `metrics` with the following line

```
rate(go_memstats_gc_cpu_fraction[5m]) * 100000
```

The `A` marker will be used to identify this query

## Create the JSON global file

To create the JSON global file, you can go to the [import file](./../editor/import.md) and follow the instruction

## Add the global file

For this tutorial, we will use the following JSON file, available directly from the depot :

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo10-01-global.json
```

Once you are on the `Visualization` menu, go to the `Import Files` section.

Then, copy and paste the last link in the `Global Url Import` section.

Click on `Finish` when it's done.

![global_import](../../screenshots/demo/tutorial10/GlobalImport.png)

## Result

![result](../../screenshots/demo/tutorial10/result.png)

# Bonus

We provide you with 2 additional associated files :

- [Tutorial2](tutorial2.md)
  - Create the `queries`
  - Import the following global file

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo10-02-global.json
```

- [Tutorial3](tutorial3.md)

  - Create the `queries`
  - Import the following global file

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo10-03-global.json
```
