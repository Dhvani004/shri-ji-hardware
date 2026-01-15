// ignore_for_file: dead_code

import 'dart:convert';
import 'dart:io';

void main() {
  // static variable are non-nullabe and we can change value but can not change the datatype. initialize via(int,double,string, num, bool, etc) dataype, var.
  // int x=10;

  // const variables are non-nullable and we can not change value and datatype, initialize with const and final
  // const pi=3.14;

  // dynamic variable are nullable by default,can change datatype and value initialize via dynamic keyword.
  // dynamic x;

  // String userName = "  Dhvani  ";
  //print(userName);
  //print(userName.length);
  //print(userName.trim().length);
  //print(userName.trim().toUpperCase());

  // int? name;
  // print(name);

  // String? nameUser;
  // print(nameUser?.length);

  // String? userName;
  // print(userName ?? "Unknown user");
  // print(userName);

  // assign if-null ??=
  // String? userName;
  // print(userName ??= "Unknown user");
  // print(userName);

  // ~ (bitwise) return the output in integer
  // int timeMinutes = 135;
  // int hrs = timeMinutes ~/ 60;
  // int mins = timeMinutes % 60;
  // print("$hrs hrs $mins mins");

  // var userName = stdin.readLineSync();
  // print("Hello $userName");

  String? num = stdin.readLineSync()!;
  int num2 = int.parse(num);
  print(num2 + 4);
}
